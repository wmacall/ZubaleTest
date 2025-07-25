export interface User {
  id: string;
  createdAt: string;
  name: string;
  avatar: string | null;
  description: string;
  likes: number;
  image: string;
  comments: number;
  liked: boolean;
  saved: boolean;
  location: string;
}
