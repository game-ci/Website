/* eslint-disable no-console,unicorn/no-process-exit */
import algoliasearch from 'algoliasearch';
import { difference } from 'lodash';
import config from '../../core/config';
import sections from './mock-sections';
import generateObjectIDs from './utils/generate-object-ids';

(async () => {
  try {
    if (process.env.CI) {
      console.log('[push-search-payload] Updating search cache.');
    } else {
      console.log('[push-search-payload] Skipping search update for local builds.');
      return;
    }

    // Create search client instance
    const client = algoliasearch(config.search.applicationId, process.env.SEARCH_API_PRIVATE_KEY);

    // Use existing index or create one if it does not exist
    const index = client.initIndex(config.search.index);
    await index.setSettings(config.search.settings);

    // Inventory current objects
    let existingObjects = [];
    await index.browseObjects({
      query: '', // Empty query will match all records
      attributesToRetrieve: ['objectID'],
      batch: (batch) => {
        existingObjects = existingObjects.concat(batch.map((hit) => hit.objectID));
      },
    });

    // Push objects to Algolia
    const objects = generateObjectIDs(sections, ['title', 'filename']);
    const updatedObjects = (await index.saveObjects(objects)).objectIDs;
    console.log('[push-search-payload] Updated search entries.\n', updatedObjects);

    // Remove objects that are no longer relevant
    const floatingObjects = difference(existingObjects, updatedObjects);
    if (floatingObjects.length >= 1) {
      console.log('[push-search-payload] Removing old search entries.\n', floatingObjects);
      await index.deleteObjects(floatingObjects);
    }

    console.log('[push-search-payload] Finished updating search cache.');
  } catch (error) {
    console.log(error);

    process.exit(400);
  }
})();
