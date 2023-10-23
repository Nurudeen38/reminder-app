import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../utils/colors";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";

export default function Focus(props) {
  const [inputValue, setInputValue] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Focus Feature</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on?"
          value={inputValue}
          onChangeText={(val) => setInputValue(val)}
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => props.addSubject(inputValue)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  textInput: { marginRight: spacing.sm, color: colors.white },
  button: {
    justifyContent: "center",
  },
});
