
import './App.css';
import UserCard from './UserCard';
import SearchIcon from './search.svg';
import { useState, useEffect } from 'react';


const API_URL = 'https://reqres.in/api/users?page=2';

const App = () => {
  
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState('test');
  const [clicked, setClicked] =  useState(false);
  const [searchData, setSearchData] = useState();

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();

      setUsers(data.data)
    }
    getUsers();
  }, []);

  const search = async (input) => {
      const arr = [];

      users.map((x) => {
        var fullName = x.first_name + " " + x.last_name;
        if(fullName.toLowerCase().includes(input.toLowerCase())){
          arr.push(x)
        }
      });

      setSearchData(arr);
      setClicked(true);
  }
  

  return (
    <div className='app'>
      <h1>UserLand</h1>
      <div className='search'>
        <input placeholder='Search for users' onChange={(x) => setInput(x.target.value)} onEnter/>
        <img src={SearchIcon} alt="search" onClick={() => search(input)}/>
      </div>

      <div className='container'>
        {
          clicked ? 
            searchData.length > 0 ?
            searchData.map((user) => (
              <UserCard user={user}/>
            ))
            :
            (
              <div>
                <h2>No Data</h2>
                {setClicked(false)}
              </div>
            )
          :
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



