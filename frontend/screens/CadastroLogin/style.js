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
	textInput: {
		width: '100%',
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 10,
		paddingHorizontal: 10,
	},
	dropdown: {
		height: 50,
		borderColor: 'gray',
		borderWidth: 0.5,
		borderRadius: 8,
		paddingHorizontal: 8,
	},
	icon: {
		marginRight: 5,
	},
	label: {
		position: 'absolute',
		backgroundColor: 'white',
		left: 22,
		top: 8,
		zIndex: 999,
		paddingHorizontal: 8,
		fontSize: 14,
	},
	placeholderStyle: {
		fontSize: 16,
	},
	selectedTextStyle: {
		fontSize: 16,
	},
	iconStyle: {
		width: 20,
		height: 20,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16,
	},
});
