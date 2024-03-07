import React from 'react';
import { View, Text } from 'react-native';
import styles from './DenemePage.style';
import commonStyles from './../../../styles/commonStyles';

const DenemePage = () => {
  return (
    <View style={{ ...commonStyles.container }}>
      <Text style={commonStyles.text}>DenemePage</Text>
    </View>
  );
};

export default DenemePage;
