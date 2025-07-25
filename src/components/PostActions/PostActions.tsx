import { useState } from 'react';
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

export const PostActions = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

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
            color={isLiked ? COLORS.RED : COLORS.WHITE}
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
