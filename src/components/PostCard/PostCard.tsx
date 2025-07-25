import { FC } from 'react';
import { Text, View } from 'react-native';
import { Post } from '../../entities/Post';
import { Avatar } from '../ui/Avatar';
import styles from './PostCard.styles';
import { DotsThreeIcon } from 'phosphor-react-native';
import { COLORS } from '../../assets/colors';

interface PostCardProps extends Post {}

export const PostCard: FC<PostCardProps> = ({
  description,
  avatar,
  name,
  location,
}) => {
  return (
    <View>
      <View style={styles.row}>
        <View style={styles.containerHeader}>
          <Avatar avatar={avatar} name={name} />
          <View>
            <Text style={styles.textHeader}>{name}</Text>
            <Text style={styles.textLocation}>{location}</Text>
          </View>
        </View>
        <DotsThreeIcon color={COLORS.WHITE} />
      </View>
      <Text>{description}</Text>
    </View>
  );
};
