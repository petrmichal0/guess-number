import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useFonts } from "expo-font";

import { colors } from "./constants/colors";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);

  useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    console.log(pickedNumber);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  if (gameIsOver && userNumber) return <GameOverScreen />;

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
          {!userNumber && (
            <StartGameScreen pickedNumberHandler={pickedNumberHandler} />
          )}

          {userNumber && (
            <GameScreen
              userNumber={userNumber}
              onGameOverHandler={gameOverHandler}
            />
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
