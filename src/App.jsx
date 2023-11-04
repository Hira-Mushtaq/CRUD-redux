import React from "react"
import { useSelector } from "react-redux"
import { addUser,deleteUser,updateUser } from "./features/Users"
import { useDispatch } from "react-redux"
import { useState } from "react"
import './App.css'

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value)  //To grap the current state of the application and return whatever reducer you wantS
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newusername, setNewusername] = useState("");
  return (
    <div className="App">
      <div className="adduser">
        <input type="text" placeholder="Name...." onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Username...." onChange={(e) => setUsername(e.target.value)} />
        <button onClick={() => dispatch(addUser({ id: userList[userList.length - 1].id + 1, name, username }))}>Add User</button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div>
              <h1> {user.name}</h1>
              <h1> {user.username}</h1>
              <input type="text" placeholder="New Username" onChange={(e)=>setNewusername(e.target.value)}/>
              <button onClick={()=>dispatch(updateUser({id:user.id,username:newusername}))}>Updata Username</button>
              <button onClick={()=>dispatch(deleteUser({id: user.id}))}>Delete User</button>
            </div>
          );
        })
        }
      </div>

    </div>
  )
}

export default App
