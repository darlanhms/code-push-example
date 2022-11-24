import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useUpdateApp from '../hooks/useUpdateApp';

export const Download: React.FC = () => {
  const {download, status} = useUpdateApp();

  const bytesPercentage = useMemo(() => {
    if (!download) {
      return 0;
    }

    return parseInt(
      String((download.receivedBytes * 100) / download.totalBytes),
    );
  }, [download]);

  return (
    <View style={styles.container}>
      <Text style={styles.downloadText}>{bytesPercentage}%</Text>
      <View style={styles.updateBar}>
        <View style={[styles.updateProgress, {width: `${bytesPercentage}%`}]} />
      </View>
      <Text style={styles.status}>Status atual: {status?.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  downloadText: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  updateBar: {
    width: '70%',
    height: 10,
    backgroundColor: '#cfcfcf',
    borderRadius: 10,
  },
  updateProgress: {
    backgroundColor: 'green',
    height: '100%',
    borderRadius: 10,
  },
  status: {
    marginTop: 10,
    fontSize: 16,
  },
});
