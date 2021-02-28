import { SimpleAuthCheck } from '@/components/auth/safe-auth-check';
import DockerImageLink from '@/components/docs/versions/docker-image-link';
import { useAuthenticatedEndpoint } from '@/core/hooks/use-authenticated-endpoint';
import { useNotification } from '@/core/hooks/use-notification';
import { Tooltip } from 'antd';
import React, { useState } from 'react';
import { HiOutlineRefresh } from 'react-icons/all';

interface Props {
  record: {
    buildId: string;
    relatedJobId: string;
    buildInfo: {
      baseOs: string;
      editorVersion: string;
      targetPlatform: string;
      repoVersion: string;
    };
    dockerInfo: {
      imageRepo: string;
      imageName: string;
    };
  };
}

const DockerImageLinkOrRetryButton = ({ record }: Props) => {
  const { buildInfo, dockerInfo, buildId, relatedJobId } = record;
  const { baseOs, editorVersion, targetPlatform, repoVersion } = buildInfo;
  const { imageRepo, imageName } = dockerInfo || {};
  const imageTag = `${baseOs}-${editorVersion}-${targetPlatform}-${repoVersion}`;

  const [retryRequested, setRetryRequested] = useState<boolean>(false);

  if (dockerInfo) {
    return <DockerImageLink imageRepo={imageRepo} imageName={imageName} imageTag={imageTag} />;
  }

  const notify = useNotification();
  const retryBuild = useAuthenticatedEndpoint('retryBuild', { buildId, relatedJobId });

  const onClick = async () => {
    try {
      setRetryRequested(true);
      const result = await retryBuild();
      notify.success(result);
    } catch (error) {
      setRetryRequested(false);
      notify.error(error);
    }
  };

  return (
    <SimpleAuthCheck fallback={<span />} requiredClaims={{ admin: true }}>
      <Tooltip title={`Delete tag "${imageTag}" then click this retry button.`}>
        <button
          type="button"
          onClick={onClick}
          style={{ padding: 0, border: 0, outline: 0, cursor: 'pointer' }}
        >
          <HiOutlineRefresh color={retryRequested ? 'orange' : 'red'} />
        </button>
      </Tooltip>
    </SimpleAuthCheck>
  );
};

export default DockerImageLinkOrRetryButton;
