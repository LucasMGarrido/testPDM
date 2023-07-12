import { StatusBar } from 'expo-status-bar';
import { View, Image, TextInput, TouchableWithoutFeedback } from 'react-native';

import Title from '../../components/Title/index.jsx';
import Paragraph from '../../components/Paragraph/index.jsx';
import Button from '../../components/Button/index.jsx';

import styles from './style.js';

export default function Home() {
	return (
		<View style={styles.container}>
			<Image
				source={require('../../assets/logo.png')}
				style={styles.logo}
			/>
			<View style={styles.main}>
				<Title>Bem-vindo de volta</Title>
				<Paragraph>
					Faça login e tenha acesso a um mundo de oportunidades
					profissionais com nosso aplicativo de vagas de estágio. Não
					perca mais tempo, comece agora a buscar a vaga perfeita para
					você!
				</Paragraph>
			</View>

			<View>
				<TextInput style={styles.input} placeholder="Nome" />
				<TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
			</View>

			<View style={styles.buttons}>
				<Button>Entrar</Button>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}
