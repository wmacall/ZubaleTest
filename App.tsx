import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { PostScreen } from './src/screens';
import { COLORS } from './src/assets/colors';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea} />
      <PostScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    backgroundColor: COLORS.BLACK,
  },
});

export default App;
