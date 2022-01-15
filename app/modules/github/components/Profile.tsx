import { User } from '../types';

export interface ProfileProps {
  user: User;
}

export const Profile = ({ user }: ProfileProps) => (
  <div>
    <h1>{user.name}</h1>
    <img src={user.avatar} alt={user.name} />
    <p>{user.bio}</p>
  </div>
);
