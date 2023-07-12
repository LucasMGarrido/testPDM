import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';

export default function Home() {
	const data = [
		{
			id: '0',
			image: 'https://www.apple.com/careers/images/fy22-og-refresh/work_at_apple_OG/desktop.png',
			empresa: 'Apple',
			cargo: 'Engenharia de Software',
			estilo: 'Presencial',
			Local: 'Cupertino, Califórnia, EUA',
			horasSemana: '30h',
		},
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
			image: 'https://www.apple.com/careers/images/fy22-og-refresh/work_at_apple_OG/desktop.png',
			empresa: 'Apple',
			cargo: 'Engenharia de Software',
			estilo: 'Presencial',
			Local: 'Cupertino, Califórnia, EUA',
			horasSemana: '30h',
		},
		// Adicione mais objetos de estágio aqui
	];

	const renderCard = ({ item }) => {
		return (
			<View style={styles.card}>
				<Image source={{ uri: item.image }} style={styles.imagem} />
				<Text style={styles.text}>{item.empresa}</Text>
				<Text style={styles.text}>{item.cargo}</Text>
				<Text style={styles.text}>{item.estilo}</Text>
				<Text style={styles.text}>{item.Local}</Text>
				<Text style={styles.text}>{item.horasSemana}</Text>
				<Text style={styles.text}>{item.dataInicio}</Text>
				<Text style={styles.text}>{item.dataFinal}</Text>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id.toString()}
				renderItem={renderCard}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		paddingTop: 16,
	},
	card: {
		backgroundColor: '#fff',
		borderRadius: 8,
		padding: 16,
		marginBottom: 16,
	},
	image: {
		width: '100%',
		height: 200,
		borderRadius: 8,
		marginBottom: 8,
	},
	empresa: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 4,
	},
	local: {
		fontSize: 14,
		color: '#888',
	},
});
