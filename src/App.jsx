import { useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"

function App() {

  const handleLogin = (email, password) =>{
    if(email == "admin@me.com" && password == "123"){
      // console.log("this is admin");
      setUser("user"); 
    }else if(email == "user@me.com" && password == "123"){
      // console.log("this is user"); 
      setUser("employees"); 
    }
    else{
      alert("invalid credencials"); 
    }
  }


  const [user, setUser] = useState(); 


  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />:""}
    {user == "user" ? <AdminDashboard/> : <EmployeeDashboard/>}
    {/* <Login/> */}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}   

export default App