export interface Post {
  id: string;
  createdAt: string;
  name: string;
  avatar: string | null;
  description: string;
  likes: string;
  image: string;
  comments: number;
  liked: boolean;
  saved: boolean;
  location: string;
}
