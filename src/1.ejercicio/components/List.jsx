import users from '../data/user.json';
import { UserListItem } from './UserListItem';

export const List = () => {
  console.log(users);

  return (
    <div>
      {users.map((user) => (
        <UserListItem key={`user-list-item ${user.firstName}`} {...user} />
      ))}
    </div>
  );
};
