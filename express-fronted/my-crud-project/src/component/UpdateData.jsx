import { useLoaderData } from "react-router-dom";


const UpdateData = () => {
  const singleData=useLoaderData()
  console.log(singleData)

  const handelUpdate=e=>{
    e.preventDefault()

    const form =e.target
    const name=form.name.value
    const email=form.email.value
    const password =form.password.value
    // console.log(name,email,password)

    const updateData={
      name,
      email,
      password,
    }
    console.log(updateData)

  }
  return (
    <div>
      <h2>updated</h2>
    <form action="" onSubmit={handelUpdate} >

    <input type="text" name="name" defaultValue={singleData?.name} id="" />
      <br />
      <input type="email" name="email" defaultValue={singleData?.email} id="" />
      <br />
      <input type="password" name="password" id="" defaultValue={singleData?.password} />
      <br />
      <button type="submit">Update</button>
    </form>
    </div>
  );
};

export default UpdateData;