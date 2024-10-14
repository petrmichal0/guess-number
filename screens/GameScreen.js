import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/NumberContainer";
import GuessLogItem from "../components/GuessLogItem";
import PrimaryButton from "../ui/PrimaryButton";
import Card from "../ui/Card";
import InstructionText from "../ui/InstructionText";
import Title from "../ui/Title";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOverHandler }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOverHandler(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOverHandler, guessRounds.length]);

  function nextGuessHandler(direction) {
    // direction => "lower", "higher"
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont lie!", "You know that this is wrong...!", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const nwRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(nwRndNumber);
    setGuessRounds((guessRounds) => [...guessRounds, nwRndNumber]);
  }

  const guessRoundsListLength = guessRounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <View>
          <InstructionText style={styles.instructionText}>
            Higher or lower?
          </InstructionText>

          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={() => nextGuessHandler("lower")}>
                <Ionicons name="remove" size={24} color="white" />
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={() => nextGuessHandler("higher")}>
                <Ionicons name="add" size={24} color="white" />
              </PrimaryButton>
            </View>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonContainerLandscape}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("higher")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  // const paddingDistance = width < 380 ? 5 : 20;
  const paddingDistance = width > 500 ? 0 : 20;

  return (
    <View style={styles.screen}>
      <Title>Opponents Guess</Title>
      {content}
      <View style={[styles.listContainer, { padding: paddingDistance }]}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              // Makes sure the last attempt is at the top of the list (otherwise, itemData.index + 1 would be enough).
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 36,
    gap: 24,
    alignItems: "center",
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 8,
  },
  buttonContainer: {
    flex: 1,
  },
  buttonContainerLandscape: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    width: "50%",
  },
  listContainer: {
    flex: 1,
  },
});
