import { useIsFocused } from "@react-navigation/native";
import { Accelerometer, Barometer } from "expo-sensors";
import { FC, useEffect, useState } from "react";
import { Text, View } from "react-native";

const AccelerometerScreen: FC = () => {
  const [stats, setStats] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    Accelerometer.setUpdateInterval(500);
    const subscription = Accelerometer.addListener(
      ({ timestamp, ...cords }) => {
        setStats(cords);
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          alignItems: "flex-start",
          width: "50%",
          gap: 12,
        }}
      >
        {Object.entries(stats).map((item) => (
          <Text key={item[0]}>{`${item[0]}: ${item[1]}`}</Text>
        ))}
      </View>
    </View>
  );
};

export default AccelerometerScreen;
