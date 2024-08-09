import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useFonts } from "expo-font";
import { AppLoading } from "expo-app-loading";

import { colors } from "./constants/colors";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  function startNewGame() {
    setUserNumber(null);
    setGameIsOver(false);
    setGuessRounds(0);
  }

  return (
    <LinearGradient
      colors={[colors.primary600, colors.primary500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/dices.webp")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {gameIsOver && userNumber ? (
            <GameOverScreen
              userNumber={userNumber}
              roundsNumber={guessRounds}
              onStartNewGame={startNewGame}
            />
          ) : (
            <>
              {!userNumber && (
                <StartGameScreen pickedNumberHandler={pickedNumberHandler} />
              )}

              {userNumber && (
                <GameScreen
                  userNumber={userNumber}
                  onGameOverHandler={gameOverHandler}
                />
              )}
            </>
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
