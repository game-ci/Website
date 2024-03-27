import Link from '@docusaurus/Link';
import React from 'react';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import Section from '@site/src/components/pages/home/section/section';
import CircleCiLogo from '@site/static/assets/images/icons/circleci.svg';

const SponsorsSection = () => {
  return (
    <Section title="Sponsors">
      <FadeIntoView>
        <ul className="mt-12 flex gap-4 list-none p-0">
          <li>
            <Link to="https://circleci.com?utm_source=game-ci">
              <CircleCiLogo className="w-[120px] fill-brand-text-light dark:fill-brand-text-dark" />
            </Link>
          </li>
        </ul>
      </FadeIntoView>
    </Section>
  );
};

export default SponsorsSection;
