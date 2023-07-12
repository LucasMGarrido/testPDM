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
				<Title>Adicionar dados do Estágio</Title>
			</View>

			<View>
				<TextInput
					style={styles.input}
					placeholder="Perfil do Profissional"
				/>
				<TextInput style={styles.input} placeholder="Perfil da vaga" />
				<TextInput style={styles.input} placeholder="Benefícios" />
				<TextInput
					style={styles.input}
					placeholder="Estilo de trabalho"
				/>
				<TextInput style={styles.input} placeholder="Atividades" />
				<TextInput
					style={styles.input}
					placeholder="Carga Horária Semanal"
				/>
				<TextInput style={styles.input} placeholder="Empresa" />
			</View>
			<View style={styles.buttons}>
				<Button>Adicionar</Button>
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
