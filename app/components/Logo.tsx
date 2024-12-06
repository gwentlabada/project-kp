import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../../assets/img/logoHalut.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 130,
    marginBottom: 12,
  },
});

export default memo(Logo);
