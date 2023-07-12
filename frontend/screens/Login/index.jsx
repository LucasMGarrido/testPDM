import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TextInput } from 'react-native';

import Title from '../../components/Title/index.jsx';
import Paragraph from '../../components/Paragraph/index.jsx';
import Button from '../../components/Button/index.jsx';

import styles from './style.js';
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('')
  const [senha, setSenha] = useState('')

    function handleSignIn(){
      const data = {
        username,
        senha,
      }
      console.log(data);
    }

  return(
		<View style={styles.container}>
			<View style={styles.main}>
				<Title>Bem-vindo de volta</Title>
				<Paragraph>
					Faça login e tenha acesso a um mundo de oportunidades
					profissionais com nosso aplicativo de vagas de estágio. Não
					perca mais tempo, comece agora a buscar a vaga perfeita para
					você!
				</Paragraph>
			</View>
			<View style={styles.buttons}>
				<Button>Entrar</Button>
			</View>

      <View>
        <TextInput
          placeholder="Nome"
        />
      </View>
			<StatusBar style="auto" />
		</View>
	);
}


/* 
export function Login(){
  return(
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dimiss}>
        <keyboardAvoidingView behavior="position" enabled>
          <>
          <Header />
          <Form />
        </keyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  )
}
*/

/*
export default function formulario() {
  return(
    <Container>
      <input 
        style={styles.input},
        placeholder="Nome",
        //onChangeText={setUsername}
        //value={username}
      />

      <input 
        style={styles.input},
        placeholder="Email",
        //onChangeText={setUsername}
        //value={username}
        KeyboardType="email-address" //colocar o arroba na primeira parte do teclado
        autoCapitalize="none" //usar somente letras minusculas.= Começar a escrever somente letras monusculas.
      />

      <input 
        style={styles.input},
        placeholder="Senha",
        //onChangeText={setSenha}
        //value={senha}
        secureTextEntry={true}
      />

      <Button
        title="Entrar"
        onPress={handleUserRegister} //função de registrar aqui dentro
      />
    </Container>



		<View style={styles.container}>
			<View style={styles.main}>
				<Title>Bem-vindo de volta</Title>
				<Paragraph>
					Faça login e tenha acesso a um mundo de oportunidades
					profissionais com nosso aplicativo de vagas de estágio. Não
					perca mais tempo, comece agora a buscar a vaga perfeita para
					você!
				</Paragraph>
			</View>
			<View style={styles.buttons}>
				<Button>Entrar</Button>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}






*/