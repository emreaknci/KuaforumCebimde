import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './DetailsPage.style';
import commonStyles from '../../../styles/commonStyles';

const DetailsPage = ({ navigation }) => {
  const navigateDeneme = () => {
    navigation.navigate('Deneme');
  }
  return (
    <View style={{ ...commonStyles.container }}>
      <Button title="Go to Details... again" onPress={navigateDeneme} />
      <Text style={commonStyles.text}>DetailsPage</Text>
    </View>
  );
};

export default DetailsPage;
