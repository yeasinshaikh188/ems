import { useState } from "react";


function Login({handleLogin}) {
  // console.log(handleLogin)
  // usestar declare
  // const [Email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");  

  // // form submite handle
  // const submitHandler = (e) =>{
  //   e.preventDefault()
  //   console.log("email is", Email); 
  //   console.log("password is", password); 

  //   setEmail(""); 
  //   setPassword(""); 
  // }
  const submitHandler = (e) =>{
    e.preventDefault(); 
    handleLogin(email, password); 
    setEmail(""); 
    setPassword(""); 
  }



  return (
    <div className="flex items-center h-screen w-screen justify-center">
        <div className="border-2 p-20 border-emerald-600">
            <form 
            // onSubmit={(e)=>{
            //   submitHandler(e)
            // }}
            onSubmit={(e)=>{
              submitHandler(e); 
            }}
            className="flex space-y-4 flex-col items-center justify-center">
                <input
                // value={Email}
                // onChange={(e)=>{
                //   setEmail(e.target.value); 
                // }}
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value); 
                  // console.log(e.target.value)
                }}
                 required
                  className="border-2 bg-transparent outline-none text-xl text-white border-emerald-600 rounded-full py-4 px-5 placeholder:text-gray-400" type="Email" placeholder="Enter your email"/>
                <input
                // value={password}
                // onChange={(e)=>{
                //   setPassword(e.target.value);
                // }}
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value); 
                }}
                 required
                  className="border-2 bg-transparent outline-none text-xl text-white border-emerald-600 rounded-full py-4 px-5 placeholder:text-gray-400"  type="password" placeholder="Enter password"/>
                <button className="border-none bg-emerald-600 outline-none text-xl text-white  rounded-full px-10 py-3 ">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login