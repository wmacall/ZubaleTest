import { UserDTO } from '../api/DTOS';
import { User } from '../entities/User';

export const mapUserPosts = (posts: UserDTO[]): User[] =>
  posts.map(post => ({
    id: post.id,
    createdAt: post.createdAt,
    name: post.name,
    avatar: post.avatar || null,
    description: post.description,
    likes: post.likes,
    image: post.image,
    comments: post.comments,
    liked: post.liked,
    saved: post.saved,
    location: post.location,
  }));
