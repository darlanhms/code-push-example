import React from 'react';
import CodePush, {CodePushOptions} from 'react-native-code-push';
import {UpdateAppProvider} from './hooks/useUpdateApp';
import {Router} from './router';

const codePushConfig: CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
  installMode: CodePush.InstallMode.IMMEDIATE,
  updateDialog: {
    mandatoryUpdateMessage: 'Uma atualização está pronta',
    mandatoryContinueButtonLabel: 'Atualizar',
    title: 'Atualização',
  },
};

const App: React.FC = () => {
  return (
    <UpdateAppProvider>
      <Router />
    </UpdateAppProvider>
  );
};

export default CodePush(codePushConfig)(App);
