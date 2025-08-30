import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import {useRouter} from "expo-router";
import SearchBar from "@/components/SearchBar";

const images = {
  bg: require('../../assets/images/bg.png'),
};

const icons = {
  logo: require('../../assets/icons/logo.png'),
};

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={images.bg}/>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{minHeight: "100%" , paddingBottom: 10}}>
        <Image source={icons.logo}/>
        <View>
          <SearchBar 
             onPress={() => {
                router.push("/search");
              }}
             placeholder="Search for a movie"
          />
        </View>
      </ScrollView>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
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