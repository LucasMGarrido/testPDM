import { StatusBar } from 'expo-status-bar';
import { View, Image, TextInput, TouchableWithoutFeedback } from 'react-native';

import Title from '../../components/Title/index.jsx';
import Paragraph from '../../components/Paragraph/index.jsx';
import Button from '../../components/Button/index.jsx';
import { AntDesign } from '@expo/vector-icons';

import styles from './style.js';

export default function Home() {
	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Title>Adicionar dados da Empresa</Title>
			</View>

			<View>
				<TextInput style={styles.input} placeholder="Nome" />
				<TextInput style={styles.input} placeholder="Sobre a empresa" />
				<TextInput style={styles.input} placeholder="CNPJ" />
				<TextInput style={styles.input} placeholder="Email" />
				<TextInput style={styles.input} placeholder="Cidade" />
				<TextInput style={styles.input} placeholder="Latitude" />
				<TextInput style={styles.input} placeholder="Longitude" />

				<View style={styles.buttonsUploadImagem}>
				<Button>Adicionar Imagem</Button>
				</View>	

			</View>
			<View style={styles.buttons}>
				<Button>Finalizar</Button>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

/*
<ButtonUploadImages onPress={handleSelectImages}>
    <AntDesign name="plus" size={24} color="#15B6D6" />
</ButtonUploadImages>
*/
