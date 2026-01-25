import { router } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  //const [stayLoggedIn, setStayLoggedIn] = useState(true);

  /**
   * stay logged in gibts grad nicht im backend
   *
   * wenn es das dann mal gibt werde ich es einfügen
   */

  const handleLogin = async () => {
    try {
      const res = await fetch(
        "https://api.properform.app/auth/trainers/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            //stayLoggedIn,
          }),
        },
      );

      const data = await res.json();

      setMessage(data.message);

      router.replace("/dashboard");

      console.log("LOGIN RESPONSE:", data);
    } catch (err) {
      console.log("LOGIN ERROR:", err);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          placeholder="E-Mail"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Passwort"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />

        {message ? <Text>{message}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "white",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    width: 320,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 14,
  },
  button: {
    backgroundColor: "#F97316",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
