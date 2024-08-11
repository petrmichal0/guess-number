import { Text, StyleSheet, Platform } from "react-native";
import { colors } from "../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: colors.title,
    textAlign: "center",
    borderWidth: Platform.OS === "android" ? 2 : 0,
    borderColor: colors.title,
    padding: 12,
    backgroundColor: colors.background,
    maxWidth: "80%",
    width: 300,
  },
});
