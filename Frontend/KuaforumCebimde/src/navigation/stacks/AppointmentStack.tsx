import { AppointmentPage } from '../../pages/AppointmentPage';
import { createStackNavigator } from '@react-navigation/stack';
import commonStyles from './../../styles/commonStyles';
import { styles } from '../AppNavigator.styles';


const Stack = createStackNavigator();

function AppointmentStack() {
    return (
        <Stack.Navigator screenOptions={{...styles.stack}}>
            <Stack.Screen name="Appointment" component={AppointmentPage} />
        </Stack.Navigator>
    )
}

export default AppointmentStack