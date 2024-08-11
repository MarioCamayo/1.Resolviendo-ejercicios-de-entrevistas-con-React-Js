export const UserListItem = (user) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      <li>Name: {user.firstName}</li>
      <li>Phone: {user.phone}</li>
    </ul>
  );
};
