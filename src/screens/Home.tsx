import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useUpdateApp from '../hooks/useUpdateApp';

export const HomeScreen: React.FC = () => {
  const {sync, version, status} = useUpdateApp();

  useEffect(() => {
    sync();
  }, [sync]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, Mundo!</Text>
      <Text style={styles.info}>Versão CodePush: {version}</Text>
      <Text style={styles.info}>Status atual: {status?.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 10,
  },
});
