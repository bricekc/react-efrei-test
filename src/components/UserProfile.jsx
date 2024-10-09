import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  console.log(user);
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="" className="card-img-top" alt="" />
      <span>{user?.name}</span>
      <span>{user?.username}</span>
      <span>{user?.email}</span>
      <span>{user?.company?.name}</span>
      <span>{user?.address?.city}</span>
    </div>
  );
}

export default UserProfile;
