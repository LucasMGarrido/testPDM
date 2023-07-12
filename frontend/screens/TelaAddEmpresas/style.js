import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},

	main: {
		gap: 25,
		marginTop: 80,
		marginBottom: 10,
		marginHorizontal: 25,
	},

	buttons: {
		marginTop: 30,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		marginHorizontal: 25,
	},

	input: {
		marginTop: 10,
		width: 350,
		height: 55,
		backgroundColor: '#F3F3F3',
		borderRadius: 30,
		paddingLeft: 25,
	},
	
	buttonsUploadImagem: {
		backgroundColor: '#F3F3F3', //colocar esse cor la no button. e arrumar a largura e altura dela
		marginTop: 30,
	},
});
