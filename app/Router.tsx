import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import Home from "./screens/GyroscopeScreen";
import GyroscopeScreen from "./screens/GyroscopeScreen";
import BarometerScreen from "./screens/BarometerScreen";
import AccelerometerScreen from "./screens/Accelerometer";

const Tab = createBottomTabNavigator();

const Router: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="accelerometer" component={AccelerometerScreen} />
      <Tab.Screen name="gyroscope" component={GyroscopeScreen} />
      <Tab.Screen name="barometer" component={BarometerScreen} />
    </Tab.Navigator>
  );
};

export default Router;
