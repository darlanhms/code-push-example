import CodePush from 'react-native-code-push';

export const getCodePushStatusName = (status: CodePush.SyncStatus): string => {
    switch (status) {
        case CodePush.SyncStatus.UP_TO_DATE:
            return 'Up to date';
        case CodePush.SyncStatus.AWAITING_USER_ACTION:
            return 'Awaiting user action';
        case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
            return 'Checking for update';
        case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
            return 'Downloading package';
        case CodePush.SyncStatus.INSTALLING_UPDATE:
            return 'Installing update';
        case CodePush.SyncStatus.SYNC_IN_PROGRESS:
            return 'Sync in progress';
        case CodePush.SyncStatus.UNKNOWN_ERROR:
            return 'Unknown error';
        case CodePush.SyncStatus.UPDATE_IGNORED:
            return 'Update ignored';
        case CodePush.SyncStatus.UPDATE_INSTALLED:
            return 'Update installed';
        default:
            return 'Unknown';
    }
};
