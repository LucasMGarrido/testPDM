import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Pressable,
	FlatList,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import styles from './style.js';

export default function Home() {
	const services = [
		{
			id: '1',
			image: 'https://www.apple.com/careers/images/fy22-og-refresh/work_at_apple_OG/desktop.png',
			empresa: 'Apple',
			cargo: 'Engenharia de Software',
			estilo: 'Presencial',
			Local: 'Cupertino, Califórnia, EUA',
			horasSemana: '30h',
		},
		{
			id: '2',
			image: 'https://www.centralxbox.com.br/wp-content/uploads/2020/02/microsoft-gdc-2020.jpg',
			empresa: 'Microsoft',
			cargo: 'Engenharia de Software',
			estilo: 'Presencial',
			Local: 'Cupertino, Califórnia, EUA',
			horasSemana: '30h',
		},
		{
			id: '3',
			image: 'https://www.imobzi.com/papoimobiliario/wp-content/uploads/2022/12/meta-verso.png',
			empresa: 'Meta',
			cargo: 'Engenharia de Software',
			estilo: 'Presencial',
			Local: 'Cupertino, Califórnia, EUA',
			horasSemana: '30h',
		},
		{
			id: '4',
			image: 'https://cdn-icons-png.flaticon.com/128/995/995016.png',
			empresa: 'Samsung',
			cargo: 'Engenharia de Software',
			estilo: 'Presencial',
			Local: 'Cupertino, Califórnia, EUA',
			horasSemana: '30h',
		},
		{
			id: '5',
			image: 'https://cdn-icons-png.flaticon.com/128/995/995016.png',
			empresa: 'Tecent',
			cargo: 'Engenharia de Software',
			estilo: 'Presencial',
			Local: 'Cupertino, Califórnia, EUA',
			horasSemana: '30h',
		},
	];

	const renderPressable = ({ item }) => (
		<Pressable style={styles.pressable}>
			<View style={{ alignItems: 'center' }}>
				<Image source={{ uri: item.image }} style={styles.imagem} />
			</View>

			<View style={{}}>
				<Text style={styles.nomeEmpresa}>{item.empresa}</Text>
				<Text style={styles.textCargo}>{item.cargo}</Text>
				<Text style={styles.text}>{item.estilo}</Text>
				<Text style={styles.text}>{item.Local}</Text>
				<Text style={styles.text}>{item.horasSemana}</Text>
				<Text style={styles.text}>{item.dataInicio}</Text>
				<Text style={styles.text}>{item.dataFinal}</Text>
			</View>

			<View style={styles.icon}>
				<MaterialIcons name="touch-app" size={24} color="black" />
			</View>
		</Pressable>
	);

	return (
		<View style={styles.container}>
			<Text style={styles.tituloPag}>Estágios Disponíveis</Text>

			<View style={styles.central}>
				<TextInput style={styles.input} placeholder="Pesquisar" />
			</View>

			<View style={styles.central}>
				<FlatList
					data={services}
					keyExtractor={(item, index) => index.toString()}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ padding: 10 }}
					renderItem={renderPressable}
				/>
			</View>
		</View>
	);
}
