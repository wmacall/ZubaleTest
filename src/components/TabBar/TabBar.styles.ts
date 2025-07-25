import { StyleSheet } from 'react-native';
import { resize } from '../../utils/resize';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: resize.scaleHeight(50),
  },
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
