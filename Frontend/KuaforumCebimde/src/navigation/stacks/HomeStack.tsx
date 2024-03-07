import { createStackNavigator } from '@react-navigation/stack';
import { HomePage } from '../../pages/HomePage';
import { DetailsPage } from '../../pages/HomePage/DetailsPage';
import commonStyles from '../../styles/commonStyles';
import colors from '../../styles/colors';
import { styles } from '../AppNavigator.styles';
import { DenemePage } from '../../pages/HomePage/DenemePage';

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ ...styles.stack }}>
            <Stack.Screen name="Home" component={HomePage} options={{ title: "Kuaförüm Cebimde" }} />
            <Stack.Screen name="Details" component={DetailsPage} />
            <Stack.Screen name="Deneme" component={DenemePage} />
        </Stack.Navigator>
    )
}

export default HomeStack;