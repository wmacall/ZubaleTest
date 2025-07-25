import { StyleSheet } from 'react-native';
import { COLORS } from '../../assets/colors';
import { resize } from '../../utils/resize';

export default StyleSheet.create({
  container: {
    paddingBottom: resize.scaleHeight(12),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
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
    paddingBottom: resize.scaleHeight(8),
    paddingHorizontal: resize.scaleWidth(12),
    justifyContent: 'space-between',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: resize.scaleWidth(8),
  },
  imageContainer: {
    width: '100%',
    height: resize.scaleHeight(430),
    backgroundColor: COLORS.GRAY,
  },
  image: {
    width: '100%',
    height: resize.scaleHeight(430),
  },
  containerContent: {
    paddingHorizontal: resize.scaleWidth(16),
  },
  textContent: {
    color: COLORS.WHITE,
    fontSize: resize.scaleFont(12),
  },
  textNameBold: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
  moreButton: {
    color: COLORS.WHITE,
    opacity: 0.4,
  },
  textComments: {
    color: COLORS.WHITE,
    fontSize: resize.scaleFont(12),
    opacity: 0.6,
  },
  containerText: {
    gap: resize.scaleWidth(4),
  },
  responses: {
    marginTop: resize.scaleHeight(4),
  },
  containerStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
