import React from 'react';
import CodePush from 'react-native-code-push';
import {UpdateAppProvider} from './hooks/useUpdateApp';
import {Router} from './router';

const App: React.FC = () => {
  return (
    <UpdateAppProvider>
      <Router />
    </UpdateAppProvider>
  );
};

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.MANUAL,
})(App);
