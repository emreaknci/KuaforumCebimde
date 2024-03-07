import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import colors from "../styles/colors";
import { StackNavigationOptions } from "@react-navigation/stack";

const tab: BottomTabNavigationOptions = {
    tabBarLabelStyle: {
        fontSize: 12,
    },
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.black,
}

const stack: StackNavigationOptions = {
    headerStyle: {
        backgroundColor: colors.primary,
    },
    headerTintColor: colors.white,
    animationEnabled: true,
    headerTitleAlign: "center",
};

export const styles = {
    tab,
    stack
}
