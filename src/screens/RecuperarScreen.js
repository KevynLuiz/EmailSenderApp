import { Image, StyleSheet, Platform, Button, TextInput, View, Text } from 'react-native';
import { useState } from 'react';
import axios from 'axios';


export default function RecuperarScreen({ navigation }) {

  
    const [email, setEmail] = useState('');



    const sendEmailRecuperar = async () => {
        const dados = {
            email: email
        };

        axios.post(
            'http://localhost:5000/send-email-recuperarsenha',
            dados
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

            navigation.navigate("Modificação de Senha")
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
          
        <Button onPress={sendEmailRecuperar}title="Recuperar Senha"></Button>
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
