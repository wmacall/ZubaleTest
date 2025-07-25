import { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  ListRenderItem,
  RefreshControl,
  View,
} from 'react-native';
import { Loader } from '../../components/Loader';
import { getPosts } from '../../api/posts/posts.api';
import { Post } from '../../entities/Post';
import { mapUserPosts } from '../../utils/mapper';
import { PostCard } from '../../components/PostCard';
import styles from './post.screen.styles';
import { mapApiError } from '../../utils/mapApiError';
import { TabBar } from '../../components/TabBar/TabBar';
import { COLORS } from '../../assets/colors';

export const PostScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleGetPosts = async () => {
    try {
      const response = await getPosts();
      const mappedPosts = mapUserPosts(response.data);
      setPosts(mappedPosts);
    } catch (error) {
      Alert.alert('Error', mapApiError(error).message);
    } finally {
      setIsRefreshing(false);
      setIsLoading(false);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    handleGetPosts();
  };

  const renderItem: ListRenderItem<Post> = ({ item }) => <PostCard {...item} />;

  useEffect(() => {
    handleGetPosts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {isLoading ? (
          <Loader />
        ) : (
          <FlatList
            data={posts}
            keyExtractor={item => item.id}
            refreshControl={
              <RefreshControl
                tintColor={COLORS.WHITE}
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
              />
            }
            initialNumToRender={8}
            maxToRenderPerBatch={8}
            updateCellsBatchingPeriod={30}
            windowSize={10}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
          />
        )}
      </View>
      <TabBar />
    </View>
  );
};
