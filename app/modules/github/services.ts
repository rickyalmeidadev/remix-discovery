import { User } from './types';

export const getUserByUsername = async (username: string): Promise<User> => {
  const response = await fetch(`http://api.github.com/users/${username}`);
  const json = await response.json();

  return {
    id: json.id,
    name: json.name,
    avatar: json.avatar_url,
    bio: json.bio,
  };
};
