import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import useUpdateApp from '../hooks/useUpdateApp';
import {StackParamList} from '../router';

type HomeScreenProps = NativeStackScreenProps<StackParamList, 'Home'>;

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {sync, version, status, isUpdating} = useUpdateApp();

  useEffect(() => {
    sync();
  }, [sync]);

  useEffect(() => {
    if (isUpdating) {
      navigation.navigate('Download');
    }
  }, [isUpdating, navigation]);

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
