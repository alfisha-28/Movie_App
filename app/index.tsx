import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to React Native</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
      <Link href="/onboarding"style={styles.link}>Onboarding</Link>
      <Link href={{ pathname: "/movie/[id]", params: { id: "avengers" } }} style={styles.link}>
        Avengers Page
      </Link>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e40af",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3b82f6",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  link: {
    fontSize: 16,
    color: "#2563eb",
    fontWeight: "500",
    margin: 15,
  },
});