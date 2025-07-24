import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Icon name="pinterest" size={80} color="#e60023" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
