import { Gyroscope } from "expo-sensors";
import { FC, useEffect, useState } from "react";
import { Text, View } from "react-native";

const GyroscopeScreen: FC = () => {
  const [stats, setStats] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    Gyroscope.setUpdateInterval(1000);
    const subscription = Gyroscope.addListener(({ timestamp, ...cords }) => {
      setStats(cords);
    });

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
          gap: 10,
        }}
      >
        {Object.entries(stats).map((coord) => (
          <Text key={coord[0]}>{`${coord[0]}: ${coord[1]}`}</Text>
        ))}
      </View>
    </View>
  );
};

export default GyroscopeScreen;
