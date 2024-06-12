import { Image, StyleSheet, Platform, Button, TextInput, View } from 'react-native';
import { useState } from 'react';
import axios from 'axios';


export default function HomeScreen({ navigation }) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const sendEmailContato = async () => {
        const dados = {
            nome: nome,
            email: email,
            mensagem: mensagem
        };

        axios.post(
            'http://localhost:5000/send-email-contato',
            dados
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <View
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        >
            <View style={styles.stepContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={nome}
                    onChangeText={setNome}
                />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.textArea}
                    placeholder="Mensagem"
                    value={mensagem}
                    onChangeText={setMensagem}
                    multiline
                />
            </View>
            <View style={styles.stepContainer}>
                <Button onPress={sendEmailContato} title='Enviar email'></Button>
            </View>
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
