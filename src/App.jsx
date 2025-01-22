import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { AuthContext } from "./context/AuthProvider";

function App() {

  const [user, setUser] = useState(null); 
  const AuthData = useContext(AuthContext); 

  useEffect(()=>{
    if(AuthData)=>{
      const loggedIn = localStorage.getItem("loggedIn"); 
    }
  },[AuthData])

  const handleLogin = (email, password) =>{
    if(email == "admin@me.com" && password == "123"){
      // console.log("this is admin");
      setUser("user"); 
    }else if(AuthData && AuthData.employees.find((e)=>email == e.email && e.password == password)){
      // console.log("this is user"); 
      setUser("employees"); 
    }
    else{
      alert("invalid credencials"); 
    }
  }

 


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

