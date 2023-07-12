import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Image, TextInput } from 'react-native';

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
				<Title>Cadastre-se agora mesmo!</Title>
			</View>

			<View>
				<TextInput style={styles.input} placeholder="Nome" />
				<TextInput style={styles.input} placeholder="Curso" />
				<TextInput
					style={styles.input}
					placeholder="Email"
					autoCapitalize="none"
					keyboardType="email-address"
					icon="mail"
				/>
				<TextInput
					style={styles.input}
					placeholder="Senha"
					secureTextEntry={true}
					icon="mail"
				/>
				<TextInput
					style={styles.input}
					placeholder="Confirme sua senha"
					secureTextEntry={true}
				/>

				<Pressable onPress={onPressFunction}>
					<Text>Toque Aqui!</Text>
				</Pressable>
			</View>

			<View style={styles.buttons}>
				<Button type="faded">Cadastrar</Button>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}
