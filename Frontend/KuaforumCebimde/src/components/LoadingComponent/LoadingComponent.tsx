import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './LoadingComponent.style';
import commonStyles from '../../styles/commonStyles';
import colors from '../../styles/colors';

const LoadingComponent = ({ text }: { text?: string }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", alignContent: "center", flex: 1 }}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={{ color: colors.primary, fontSize: 20 }}>{text ? text : "Yükleniyor..."}</Text>
    </View>
  );
};

export default LoadingComponent;
