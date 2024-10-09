import { useEffect, useState } from 'react';
import Search from '../components/Search.jsx';
import { Link } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([]);
  const [criteria, setCriteria] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    setFilteredUsers(users.filter((user) => user.name.toLowerCase().includes(criteria.toLowerCase())));
  }, [criteria, users]);

  return (
    <>
      <Search criteria={criteria} setCriteria={setCriteria} />
      <ul>
        {filteredUsers?.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/listUser/${user.id}`}>name: {user.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Users;
