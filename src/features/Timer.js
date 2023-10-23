import React, { useState } from "react";
import { StyleSheet, Text, Vibration, View } from "react-native";
import { ProgressBar } from "react-native-paper";

import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";
import { colors } from "../utils/colors";
import Timing from "./Timing";
import { useKeepAwake } from "expo-keep-awake";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export default function Timer({ focusSubject, onTimerEnd, clearSubject }) {
    useKeepAwake()
    const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.2);

  const handleTimeEnd = () => { 
    Vibration.vibrate(PATTERN)
    setIsStarted(false)
    setProgress(1)
    onTimerEnd(focusSubject)
}
  return (
    <View style={styles.container}>
      
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onEnd={handleTimeEnd}
          onProgress={setProgress}
        />
      </View>
      
      <View style={{ paddingTop: spacing.lg }}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar progress={progress} color={colors.progressBar} />
      </View>

      <View style={styles.buttonWrapper}>
            <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        ) : (
          <RoundedButton title="stop" onPress={() => setIsStarted(false)} />
        )}
      </View>
      <View style={styles.clearSubjectWrapper}>
            <RoundedButton size={50} title="-" onPress={clearSubject} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.2,
    flexDirection: "row",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  task: {
    color: colors.white,
    textAlign: "center",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  clearSubjectWrapper:{
    flexDirection:"row",
    justifyContent:"center"
  }
});
