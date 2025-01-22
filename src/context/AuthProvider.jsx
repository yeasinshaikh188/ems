import { createContext, useEffect, useState } from "react"
import { getLocalsStorage } from "../utils/LocalStorage";

export const AuthContext = createContext(); 

function AuthProvider({children}) {

    const [userData, setUserData] = useState(null); 
   
    useEffect(()=>{
        const {employees,admin} = getLocalsStorage(); 
        setUserData({employees,admin});
        // console.log(admin)  
    },[])

  return (
    <div>
        <AuthContext.Provider value={userData}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider