import { Text, View, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.title,
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary600,
  },
  numberText: {
    color: colors.title,
    fontSize: 48,
    fontWeight: "bold",
  },
});
