export const UserListFetch = (user) => {
  return (
    <>
      <ul style={{ listStyle: 'none' }}>
        <li> <span> Name: </span>{user.name}</li>
        <li> <span>Phone: </span>{user.phone}</li>
        <li> <span>Email: </span>{user.email}</li>
      </ul>
    </>
  );
};
