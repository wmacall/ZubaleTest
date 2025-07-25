import { StyleSheet } from 'react-native';
import { resize } from '../../../utils/resize';
import { COLORS } from '../../../assets/colors';

export default StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
  },
  fallback: {
    backgroundColor: COLORS.GRAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {
    color: COLORS.DARK_GRAY,
    fontWeight: '600',
  },
  containerImage: {
    width: resize.scaleHeight(32),
    height: resize.scaleHeight(32),
    borderRadius: resize.scaleHeight(16),
  },
});
