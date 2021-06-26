import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Recipe")}
      >
        <Text>Navigate to Recipe</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;