import { StatusBar, StyleSheet, View } from 'react-native';
import { PostScreen } from './src/screens';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <PostScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
