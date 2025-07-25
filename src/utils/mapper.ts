import { UserDTO } from '../api/DTOS';
import { Post } from '../entities/Post';

const replaceIpfsGateway = (url: string): string => {
  if (!url) return url;
  return url.replace(
    'https://cloudflare-ipfs.com/ipfs/',
    'https://ipfs.io/ipfs/',
  );
};

const fixPostImage = (url: string): string => {
  if (!url) return url;
  return url.includes('loremflickr.com')
    ? url.replace('https://loremflickr.com', 'https://picsum.photos')
    : url;
};

export const mapUserPosts = (posts: UserDTO[]): Post[] =>
  posts.map(post => ({
    id: post.id,
    createdAt: post.createdAt,
    name: post.name,
    avatar: post.avatar ? replaceIpfsGateway(post.avatar) : null,
    description: post.description,
    likes: post.likes,
    image: fixPostImage(post.image),
    comments: post.comments,
    liked: post.liked,
    saved: post.saved,
    location: post.location,
  }));
