import { useEffect, useState } from 'react';
import { Alert, FlatList, RefreshControl, View } from 'react-native';
import { Loader } from '../../components/Loader';
import { getPosts } from '../../api/posts/posts.api';
import { Post } from '../../entities/Post';
import { mapUserPosts } from '../../utils/mapper';
import { PostCard } from '../../components/PostCard';
import styles from './post.screen.styles';
import { mapApiError } from '../../utils/mapApiError';
import { TabBar } from '../../components/TabBar/TabBar';

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
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
              />
            }
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <PostCard {...item} />}
          />
        )}
      </View>
      <TabBar />
    </View>
  );
};
