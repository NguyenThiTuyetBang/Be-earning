import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Svg, { Path } from "react-native-svg";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          left: 0,
          bottom: 0,
          right: 0,
          borderTopWidth: 0,
          backgroundColor: "transparent",
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Svg
              viewBox="0 0 24 24"
              stroke-width=".895"
              aria-hidden="true"
              class="h-6 w-6"
              style={{
                height: 24,
                width: 24,
              }}
            >
              <Path
                d="M11.554 4v-.447H8.738a2.553 2.553 0 1 0 0 5.105H11.554V4Z"
                fill="#DF5A33"
                stroke="#DF5A33"
              ></Path>
              <Path
                d="M11.554 9.895v-.448H8.738a2.553 2.553 0 0 0 0 5.106H11.554V9.895Z"
                fill="#985CF7"
                stroke="#985CF7"
              ></Path>
              <Path
                d="M11.554 15.79v-.448H8.738a2.553 2.553 0 0 0 0 5.105h.132a2.684 2.684 0 0 0 2.684-2.684V15.79Z"
                fill="#5ECC89"
                stroke="#5ECC89"
              ></Path>
              <Path
                d="M15.262 9.447a2.553 2.553 0 1 1 0 5.106h-.263a2.553 2.553 0 0 1 0-5.106h.263Z"
                fill="#57B9F8"
                stroke="#57B9F8"
              ></Path>
              <Path
                d="M12.446 4v-.447H15.262a2.553 2.553 0 1 1 0 5.105H12.446V4Z"
                fill="#EE7A69"
                stroke="#EE7A69"
              ></Path>
            </Svg>
          ),
          //   tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
