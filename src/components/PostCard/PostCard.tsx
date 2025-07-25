import { FC, useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { Post } from '../../entities/Post';
import { Avatar } from '../ui/Avatar';
import styles from './PostCard.styles';
import {
  BookmarkSimpleIcon,
  ChatCircleIcon,
  DotsThreeIcon,
  HeartIcon,
  PaperPlaneTiltIcon,
} from 'phosphor-react-native';
import { COLORS } from '../../assets/colors';
import { resize } from '../../utils/resize';

interface PostCardProps extends Post {}

export const PostCard: FC<PostCardProps> = ({
  description,
  avatar,
  name,
  location,
  image,
  comments,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => setIsExpanded(!isExpanded);

  const shouldShowMore = description.length > 100;

  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.containerHeader]}>
        <View style={styles.postHeader}>
          <Avatar avatar={avatar} name={name} />
          <View>
            <Text style={styles.textHeader}>{name}</Text>
            <Text style={styles.textLocation}>{location}</Text>
          </View>
        </View>
        <DotsThreeIcon color={COLORS.WHITE} />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.containerContent}>
        <View style={[styles.row, styles.contentIcons]}>
          <View style={styles.rowIcons}>
            <HeartIcon color={COLORS.WHITE} size={resize.scaleHeight(20)} />
            <ChatCircleIcon
              color={COLORS.WHITE}
              size={resize.scaleHeight(20)}
            />
            <PaperPlaneTiltIcon
              color={COLORS.WHITE}
              size={resize.scaleHeight(20)}
            />
          </View>
          <BookmarkSimpleIcon
            color={COLORS.WHITE}
            size={resize.scaleHeight(20)}
          />
        </View>
        <View>
          <Text
            style={styles.textContent}
            numberOfLines={isExpanded ? undefined : 2}
          >
            <Text style={styles.textNameBold}>{name}</Text>
            <Text> {description}</Text>
          </Text>
          {shouldShowMore && !isExpanded && (
            <TouchableOpacity activeOpacity={0.7} onPress={handleToggleExpand}>
              <Text style={styles.moreButton}>more</Text>
            </TouchableOpacity>
          )}
        </View>
        {/* <Text>{name}</Text>
        <Text>{description}</Text> */}
        <Text>{comments} responses</Text>
      </View>
    </View>
  );
};
