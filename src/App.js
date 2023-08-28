import logo from './logo.svg';
import './App.css';
import './background Image.jpg';
 import {Router,Route,Routes} from 'react-router-dom'
// import NavBar from './components/NavBar';
// import LoginPage from './components/LoginPage';
 import SignUp from './components/SignUp';
 import SignIn from './components/SignIn';
// import Home from './components/Home';
 import NoMatch from './components/NoMatch';
 import LandPage from './components/LandPage';
 import '../src/firebase';
// import PrivateRoute from './components/PrivateRoute';
// import { useEffect, useState } from 'react';
// import { AuthContext } from './auth';
// function App() {
//   const[user,setUser]=useState(null);


//   const login =()=>{
//     setUser(user);
    
//   }

//   const  logout= ()=>{
//     setUser(null);
//   }
  

// useEffect(()=>{
//   login();
//   logout();
// },[user])


//   return (
//     <AuthContext.Provider value={{
//     user,setUser
//     }}
//     >
//     <NavBar />
   

//           <Routes>
//             <Route path="/home" element=  { <PrivateRoute > <LoginPage /></PrivateRoute>}></Route>
            
//             <Route path="/body" element = { 
//               <Body />

            
//             }></Route>
          
//             <Route path ="/submited" element = {<Home />}></Route>
//             <Route path = '*' element = {<NoMatch />}></Route>
            
//           </Routes>
    

//     </AuthContext.Provider>
   
//   );
// }

// export default App;


function App(){
  
  return(
  < >
  <div className='App'>
    <Routes>
      <Route path='/' element={<LandPage />}></Route>

      <Route path="/SignUp" element={<SignUp />} >  </Route> 
      <Route path="/SignIn" element = {<SignIn />} ></Route>
      <Route path= '*' element = {<NoMatch />}></Route>

    </Routes>

     
</div>
  </>
  )
}

export default App;