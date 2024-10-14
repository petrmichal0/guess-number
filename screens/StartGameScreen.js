import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { useState } from "react";

import { colors } from "../constants/colors";

import PrimaryButton from "../ui/PrimaryButton";
import Title from "../ui/Title";
import Card from "../ui/Card";
import InstructionText from "../ui/InstructionText";

function StartGameScreen({ pickedNumberHandler }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredNumber) {
    setEnteredNumber(enteredNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );

      return;
    }

    pickedNumberHandler(chosenNumber);
  }

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess my Number</Title>
          <Card>
            <InstructionText>Enter a Number!</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              value={enteredNumber}
              onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },

  numberInput: {
    width: 75,
    height: 50,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderColor: colors.primary600,
    marginVertical: 16,
    fontSize: 36,
    fontWeight: "600",
    color: colors.primary600,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 8,
  },
  buttonContainer: {
    flex: 1,
  },
});
