import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	logo: {
		marginTop: 100,
		marginBottom: 20,
	},
	main: {
		gap: 25,
		marginTop: 10,
		marginBottom: 40,
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

	botaoEntrar: {
		marginTop: 30,
		width: 350,
		height: 55,
		backgroundColor: '#00ADB4',
		borderRadius: 30,
		padding: 10,
		textDecorationColor: '#F3F3F3',
	},
});
