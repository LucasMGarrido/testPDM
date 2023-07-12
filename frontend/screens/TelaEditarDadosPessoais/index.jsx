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
				<Title>Editar dados Pessoais</Title>
			</View>

			<View>
				<TextInput
					style={styles.input}
					placeholder="Perfil do Profissional"
				/>
				<TextInput style={styles.input} placeholder="Nome" />
				<TextInput style={styles.input} placeholder="Email" />
				<TextInput style={styles.input} placeholder="Curso" />
				<TextInput style={styles.input} placeholder="Empresa" />
			</View>
			<View style={styles.buttons}>
				<Button>Editar</Button>
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
