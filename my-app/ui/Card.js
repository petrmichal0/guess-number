import { StyleSheet, View, Dimensions } from "react-native";

import { colors } from "../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: width < 380 ? 12 : 36,
    marginHorizontal: 24,
    backgroundColor: colors.background,
    borderRadius: 8,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    opacity: 0.9,
  },
});
