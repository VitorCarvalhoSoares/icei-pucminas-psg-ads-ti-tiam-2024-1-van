import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { View, TextInput, Button, Alert, Text, StyleSheet } from "react-native";
import { auth, db } from "../Database/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignup = async() => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });

      try {
        const docRef = await addDoc(collection(db, "user"), {
          name: name,
          email: email,
          password: password,
          phone: phone
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se</Text>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder={"Digite seu Nome"}
        style={styles.input}
      />
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder={"Digite seu Email"}
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder={"Digite sua Senha"}
        secureTextEntry={true}
        style={styles.input}
      />
      <TextInput
        value={phone}
        onChangeText={(text) => setPhone(text)}
        placeholder={"Digite seu número de celular"}
        style={styles.input}
      />
      <Button title={"Cadastrar"} onPress={handleSignup} color="#841584" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 8,
    marginBottom: 10,
  },
});

export default Signup;
