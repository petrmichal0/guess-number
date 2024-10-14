import { Text, View, StyleSheet, Dimensions } from "react-native";
import { colors } from "../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.title,
    borderRadius: 8,
    padding: width < 380 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary600,
  },
  numberText: {
    color: colors.title,
    fontSize: width < 380 ? 36 : 38,
    fontFamily: "open-sans-bold",
  },
});
