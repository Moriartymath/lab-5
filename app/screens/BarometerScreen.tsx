import { useIsFocused } from "@react-navigation/native";
import { Barometer } from "expo-sensors";
import { FC, useEffect, useState } from "react";
import { Text, View } from "react-native";

const BarometerScreen: FC = () => {
  const [stats, setStats] = useState({
    pressure: 0,
    relativeAltitude: 0,
  });

  useEffect(() => {
    const subscription = Barometer.addListener((e) => {
      setStats({
        pressure: e.pressure,
        relativeAltitude: e.relativeAltitude ?? 0,
      });
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
          gap: 12,
        }}
      >
        <Text
          style={{
            fontSize: 16,
          }}
        >
          Pressure: {stats.pressure} hPa
        </Text>
        <Text
          style={{
            fontSize: 16,
          }}
        >
          Relative Altitude: {stats.relativeAltitude}
        </Text>
      </View>
    </View>
  );
};

export default BarometerScreen;
