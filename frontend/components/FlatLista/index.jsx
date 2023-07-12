import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	Pressable,
	ScrollView,
	FlatList,
} from 'react-native';

import service from '../../screens/Home/index.jsx';

export default function lista() {
	return (
		<View style={styles.container}>
			<FlatList
				data={services}
				keyExtractor={(item, index) => index.toString()}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ padding: 10 }}
				renderItem={renderPressable}
			/>
		</View>
	);
}
