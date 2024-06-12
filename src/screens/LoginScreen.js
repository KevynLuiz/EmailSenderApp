import { Image, StyleSheet, Platform, Button, TextInput, View, Text } from 'react-native';
import { useState } from 'react';
import axios from 'axios';


export default function LoginScreen({ navigation }) {


    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');




    const sendEmailContato = async () => {
        const dados = {
            email: email
        };

        axios.post(
            'http://localhost:5000/send-email-boasvindas',
            dados
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        navigation.navigate("Home")
    }

    return (
        <View>
            

         

            <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu e-mail"
                style={styles.input}
              
            />
            <TextInput
                label="Senha"
                value={senha}
                onChangeText={setSenha}
                placeholder="Digite sua senha"
                style={styles.input}
            />
            <Button title="Recuperar Senha" onPress={()=>navigation.navigate("Recuperar")} style={styles.botao}></Button>
            <br />
            <Button mode="text" onPress={sendEmailContato} title="Login" style={styles.botao}>
            
            </Button>
            <br />
            <Button onPress={() => navigation.navigate("Registro")} title="Fazer Cadastro">
            </Button>
        </View>
    );
}
const styles = StyleSheet.create({

    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    textArea: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        paddingTop: 8,
    },
 
});


