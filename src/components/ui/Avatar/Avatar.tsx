import { FC, useState } from 'react';
import { View, Image, Text, ViewStyle, StyleProp } from 'react-native';
import { getInitials } from '../../../utils/getInitials';
import styles from './Avatar.styles';

interface AvatarProps {
  avatar: string | null;
  name: string;
  style?: StyleProp<ViewStyle>;
}

export const Avatar: FC<AvatarProps> = ({ avatar, name, style }) => {
  const [imageError, setImageError] = useState(false);

  const onError = () => setImageError(true);
  const onLoadStart = () => setImageError(false);

  const showFallback = !avatar || imageError;

  return (
    <View style={[styles.container, styles.containerImage, style]}>
      {showFallback ? (
        <View style={[styles.fallback, styles.containerImage]}>
          <Text style={styles.initials}>{getInitials(name)}</Text>
        </View>
      ) : (
        <Image
          source={{ uri: avatar }}
          style={[styles.image, styles.containerImage]}
          onError={onError}
          onLoadStart={onLoadStart}
        />
      )}
    </View>
  );
};
