import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Download} from './screens/Download';
import {HomeScreen} from './screens/Home';

export type StackParamList = {
  Home: undefined;
  Download: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            title: 'Início',
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Download"
          options={{
            title: 'Download em andamento',
          }}
          component={Download}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
