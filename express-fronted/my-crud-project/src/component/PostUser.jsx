

const PostUser = () => {
  const handlePostUser=e=>{
    e.preventDefault()

    const form =e.target
    const name=form.name.value
    const email=form.email.value
    const password =form.password.value
    // console.log(name,email,password)

    const mydata={
      name,
      email,
      password,
    }
    console.log(mydata)

    fetch()
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
    })
  }
  return (
    <div>
      <h2>user</h2>

      <form onSubmit={handlePostUser} action="">

       <input type="text" name="name" id="" />
       <br />
       <input type="email" name="email" id="" />
       <br />
       <input type="password" name="password" id="" />
       <br />
       <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default PostUser;