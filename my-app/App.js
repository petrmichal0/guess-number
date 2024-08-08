import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import { colors } from "./constants/colors";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    console.log(pickedNumber);
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
          {!userNumber && (
            <StartGameScreen pickedNumberHandler={pickedNumberHandler} />
          )}

          {userNumber && <GameScreen userNumber={userNumber} />}
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
