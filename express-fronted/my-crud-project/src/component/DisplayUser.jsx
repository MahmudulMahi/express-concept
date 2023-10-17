import { useLoaderData } from "react-router-dom";


const DisplayUser = () => {

  const users=useLoaderData()
  console.log(users)
  return (
    <div>
      
    </div>
  );
};

export default DisplayUser;