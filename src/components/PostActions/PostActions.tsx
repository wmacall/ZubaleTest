import { FC, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
  BookmarkSimpleIcon,
  ChatCircleIcon,
  HeartIcon,
  PaperPlaneTiltIcon,
} from 'phosphor-react-native';
import { COLORS } from '../../assets/colors';
import { resize } from '../../utils/resize';
import styles from './PostActions.styles';

interface PostActionsProps {
  liked?: boolean;
  saved?: boolean;
}

export const PostActions: FC<PostActionsProps> = ({
  liked = false,
  saved = false,
}) => {
  const [isLiked, setIsLiked] = useState(liked);
  const [isSaved, setIsSaved] = useState(saved);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
  };

  const handleSavePress = () => {
    setIsSaved(!isSaved);
  };

  return (
    <View style={[styles.row, styles.contentIcons]}>
      <View style={styles.rowIcons}>
        <TouchableOpacity onPress={handleLikePress} activeOpacity={0.7}>
          <HeartIcon
            color={isLiked ? 'red' : COLORS.WHITE}
            size={resize.scaleHeight(20)}
            weight={isLiked ? 'fill' : 'regular'}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <ChatCircleIcon color={COLORS.WHITE} size={resize.scaleHeight(20)} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <PaperPlaneTiltIcon
            color={COLORS.WHITE}
            size={resize.scaleHeight(20)}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleSavePress} activeOpacity={0.7}>
        <BookmarkSimpleIcon
          color={isSaved ? COLORS.WHITE : COLORS.WHITE}
          size={resize.scaleHeight(20)}
          weight={isSaved ? 'fill' : 'regular'}
        />
      </TouchableOpacity>
    </View>
  );
};
