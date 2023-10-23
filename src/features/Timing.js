import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { RoundedButton } from "../components/RoundedButton";

export default function Timing({ onChangeTime }) {
  return (
    <View style={styles.timingButton}>
        <RoundedButton onPress={()=>onChangeTime(10)} title="10" size={75}  />
        <RoundedButton onPress={()=>onChangeTime(20)} title="20" size={75}  />
        <RoundedButton onPress={()=>onChangeTime(30)} title="30" size={75}  />
    </View>
  );
}

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    flexDirection:'row',
    justifyContent:"space-between",
    gap:20
  },
});
