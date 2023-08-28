import {createContext} from 'react'

export const AuthContext = createContext(null);


// export const AuthProvider =(children)=>{
//     const[user,setUser] = useState(null);

//     const login  = (user)=>{
//         setUser(user);

//     }
//     const logout = ()=>{
//         setUser(null);
//     }

//     return (<AuthContext.provider value ={{user,login,logout}}>
//           {children}

//     </AuthContext.provider>
//     )

// }

// export const useAuth =()=>{
//     return useContext(AuthContext)
// }