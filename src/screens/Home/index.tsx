import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

function Home() {
  function handleParcipantAdd() {}
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}> Open the tcheca, vai</Text>
      <Text style={styles.eventDate}> Sexta, 4 de maio de 2022</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b"
      />
      <TouchableOpacity style={styles.button} onPress={handleParcipantAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
