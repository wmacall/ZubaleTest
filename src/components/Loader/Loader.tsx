import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { COLORS } from '../../assets/colors';

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color={COLORS.WHITE} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
