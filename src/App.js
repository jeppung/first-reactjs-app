
import './App.css';
import UserCard from './UserCard';
import SearchIcon from './search.svg';
import { useState, useEffect } from 'react';


const API_URL = 'https://reqres.in/api/users?page=2';

const App = () => {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();

      setUsers(data.data)
    }
    getUsers();
  }, []);


  return (
    <div className='app'>
      <h1>UserLand</h1>
      <div className='search'>
        <input placeholder='Search for users' onChange={() => {}}/>
        <img src={SearchIcon} alt="search" onClick={() => {}}/>
      </div>

      <div className='container'>
        {
          users.length > 0 ?
          users.map((user) => (
            <UserCard user={user}/>
          )):
          (
            <div>
              <h2>No Data</h2>
            </div>
          )
        }
      </div>  
    </div>
  );
}

export default App;
