import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import CodePush from 'react-native-code-push';
import {getCodePushStatusName} from '../utils/codePushStatusName';

interface DownloadState {
  receivedBytes: number;
  totalBytes: number;
}

interface IUpdateAppContext {
  sync(): void;
  isUpdating: boolean;
  status?: {
    code: CodePush.SyncStatus;
    message: string;
  };
  download?: DownloadState;
  version: string;
}

const UpdateAppContext = createContext<IUpdateAppContext>(
  {} as IUpdateAppContext,
);

export const UpdateAppProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [status, setStatus] = useState<CodePush.SyncStatus>();
  const [download, setDownload] = useState<DownloadState>();
  const [version, setVersion] = useState<string>('0');

  const sync = useCallback(() => {
    CodePush.sync(
      {},
      newStatus => {
        setStatus(newStatus);

        if (newStatus === CodePush.SyncStatus.DOWNLOADING_PACKAGE) {
          setIsUpdating(true);
        }
        if (newStatus === CodePush.SyncStatus.UPDATE_INSTALLED) {
          setIsUpdating(false);
          setDownload(undefined);
        }
      },
      ({receivedBytes, totalBytes}) => {
        setDownload({
          receivedBytes,
          totalBytes,
        });
      },
    );
  }, []);

  useEffect(() => {
    CodePush.getUpdateMetadata().then(pkg => {
      if (pkg) {
        setVersion(pkg?.appVersion);
      }
    });
  }, []);

  const statusInfo =
    status || status === CodePush.SyncStatus.UP_TO_DATE
      ? {
          code: status,
          message: getCodePushStatusName(status),
        }
      : undefined;

  return (
    <UpdateAppContext.Provider
      value={{
        sync,
        isUpdating,
        status: statusInfo,
        download,
        version,
      }}>
      {children}
    </UpdateAppContext.Provider>
  );
};

export default function useUpdateApp(): IUpdateAppContext {
  const context = useContext(UpdateAppContext);

  if (!context) {
    throw new Error('Update App context must be used within a provider.');
  }

  return context;
}
