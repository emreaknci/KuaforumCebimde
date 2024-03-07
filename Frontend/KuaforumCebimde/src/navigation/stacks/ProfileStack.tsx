import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { ProfilePage } from '../../pages/ProfilePage';
import commonStyles from '../../styles/commonStyles';
import { styles } from '../AppNavigator.styles';


const Stack = createStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator screenOptions={{ ...styles.stack }}>
            <Stack.Screen name="Profile" component={ProfilePage} />
        </Stack.Navigator>
    )
}

export default ProfileStack