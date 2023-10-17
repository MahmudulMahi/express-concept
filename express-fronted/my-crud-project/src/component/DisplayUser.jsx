import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const DisplayUser = () => {

  const users=useLoaderData()
  const [updatedUser,setupdatedUser]=useState(users)
  console.log(users)
  const handelDelete=(_id)=>{
     console.log(_id)
     fetch(`http://localhost:5000/users/${_id}`, {
      method:"DELETE",
     })
     .then((res)=>res.json())
     .then((data)=>{
      console.log(data)

     
      if(data.deletedCount>0){
      
        alert("delete successfully")
        
      }
      const filterData=updatedUser.filter(item=>item._id!==_id)
      setupdatedUser(filterData)
     })
  }
  return (
    <div>
      <h2>{updatedUser._id}</h2>
      {
     updatedUser.map((user)=> <div key={user._id}>
      <h1>{user.name}</h1>
      <br />
      <button onClick={()=>handelDelete(user._id)} type="submit">Delete</button>
     </div>)

      }
    </div>
  );
};

export default DisplayUser;