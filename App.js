import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { colors } from "./src/utils/colors";
import Focus from "./src/features/Focus";
import Timer from "./src/features/Timer";
import FocusHistory from "./src/features/FocusHistory";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);

  return (
    <View style={styles.container}>
      {currentSubject ? (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => {
            setCurrentSubject(null);
          }}
        />
      ) : (
        <>
          <Focus addSubject={(subject) => setCurrentSubject(subject)} />
          <FocusHistory history={history} />
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.darkBlue,
  },
  text: {
    color: colors.white,
  },
});

{
  /* <StatusBar style="auto" /> */
}
