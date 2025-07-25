import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors';
import { resize } from '../../utils/resize';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textHeader: {
    color: COLORS.WHITE,
    fontSize: resize.scaleFont(14),
    fontWeight: '600',
  },
  textLocation: {
    color: COLORS.WHITE,
    fontSize: resize.scaleFont(12),
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: resize.scaleWidth(8),
  },
});
