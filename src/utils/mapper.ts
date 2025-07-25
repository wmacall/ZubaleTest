import moment from 'moment';
import { UserDTO } from '../api/DTOS';
import { Post } from '../entities/Post';
import { formatLikes } from './formatLikes';

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
    createdAt: moment(post.createdAt).fromNow(),
    name: post.name,
    avatar: post.avatar ? replaceIpfsGateway(post.avatar) : null,
    description: post.description,
    likes: formatLikes(post.likes),
    image: fixPostImage(post.image),
    comments: post.comments,
    liked: post.liked,
    saved: post.saved,
    location: post.location,
  }));
