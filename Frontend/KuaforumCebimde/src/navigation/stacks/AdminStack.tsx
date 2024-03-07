import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { AdminPage } from '../../pages/AdminPage';
import commonStyles from './../../styles/commonStyles';
import { styles } from '../AppNavigator.styles';


const Stack = createStackNavigator();
function AdminStack() {
    return (
        <Stack.Navigator screenOptions={{...styles.stack}}>
            <Stack.Screen name="Admin" component={AdminPage} />
        </Stack.Navigator>
    )
}

export default AdminStack