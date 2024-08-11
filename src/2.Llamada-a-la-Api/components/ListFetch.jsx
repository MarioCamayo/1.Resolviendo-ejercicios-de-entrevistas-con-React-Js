//Ejercicio #2 Llamada a la Api (Lista anterior traerla de la Api y hacer un update)
//https://jsonplaceholder.typicode.com/users

import { useEffect, useState } from 'react';
import { UserListFetch } from './UserListFetch';

export const ListFetch = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
        console.log(data);
      } catch (err) {
        console.error('hubo un error' + err);
      }
    };
    fetchUsers().catch(null);
  }, []);

  return (
    <div>
      <h1>Datos</h1>
      {users.map((user) => (
        <UserListFetch key={`user-list-item ${user.id}`} {...user} />
      ))}
    </div>
  );
};
