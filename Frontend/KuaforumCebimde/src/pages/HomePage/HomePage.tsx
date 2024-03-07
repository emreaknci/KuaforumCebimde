import { View, Text, Button, ActivityIndicator } from 'react-native';
import styles from './HomePage.style';
import commonStyles from '../../styles/commonStyles';
import { useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { LoadingComponent } from '../../components/LoadingComponent';


const HomePage = ({ navigation }) => {

  const navigateDetails = () => {
    navigation.navigate('Details');
  }

  // useFocusEffect(() => {
  //   console.log('Page focused');
  // });


  return (
    <View style={{ ...commonStyles.container }}>
      {/* <LoadingComponent text='Hopp...'/> */}
      <Button title="Details" onPress={navigateDetails} />
      <Text style={commonStyles.text}>HomePage</Text>
    </View>
  );
};

export default HomePage;
