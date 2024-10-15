import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, Welcome To My React Native Mobile Application.</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
  boldText:{
    fontWeight:"bold"
  }
  
});
