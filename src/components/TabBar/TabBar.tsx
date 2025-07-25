import {
  FilmSlateIcon,
  HouseIcon,
  MagnifyingGlassIcon,
  PlusSquareIcon,
  UserCircleIcon,
} from 'phosphor-react-native';
import { Pressable, SafeAreaView, View } from 'react-native';
import { COLORS } from '../../assets/colors';
import styles from './TabBar.styles';
import { resize } from '../../utils/resize';

export const TabBar = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Pressable style={styles.option}>
          <HouseIcon
            color={COLORS.WHITE}
            size={resize.scaleHeight(24)}
            weight="fill"
          />
        </Pressable>
        <Pressable style={styles.option}>
          <MagnifyingGlassIcon
            color={COLORS.WHITE}
            size={resize.scaleHeight(24)}
          />
        </Pressable>
        <Pressable style={styles.option}>
          <PlusSquareIcon color={COLORS.WHITE} size={resize.scaleHeight(24)} />
        </Pressable>
        <Pressable style={styles.option}>
          <FilmSlateIcon color={COLORS.WHITE} size={resize.scaleHeight(24)} />
        </Pressable>
        <Pressable style={styles.option}>
          <UserCircleIcon color={COLORS.WHITE} size={resize.scaleHeight(24)} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
