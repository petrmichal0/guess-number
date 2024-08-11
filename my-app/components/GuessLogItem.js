import { Text, View, StyleSheet, Dimensions } from "react-native";

import { colors } from "../constants/colors";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
}

export default GuessLogItem;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 2,
    padding: width < 380 ? 4 : 6,
    marginVertical: width < 380 ? 4 : 2,
    backgroundColor: colors.primary600,
    opacity: 0.9,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    width: "100%",

    // Android-specific styles for shadow effect
    elevation: 4, // Only works on Android for shadow effect

    // iOS-specific styles for shadow effect
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
    color: colors.title,
  },
});
