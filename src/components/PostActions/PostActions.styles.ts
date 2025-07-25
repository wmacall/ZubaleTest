import { StyleSheet } from 'react-native';
import { resize } from '../../utils/resize';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowIcons: {
    flexDirection: 'row',
    gap: resize.scaleWidth(8),
  },
  contentIcons: {
    justifyContent: 'space-between',
    marginVertical: resize.scaleHeight(6),
  },
});
