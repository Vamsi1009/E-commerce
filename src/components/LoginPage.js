// import React from 'react';
// import {Form,FormGroup,Label,Input,Button, Alert} from 'reactstrap';
// import {useNavigate} from 'react-router-dom'
// import { useState } from 'react';
// import '../LoginPage.css'
// export function LoginPage(props){
//     const Navigate = useNavigate();

//     const [password,setPassword] =useState(null);
//     const [Email ,SetEmail]= useState(null);

//     const data = (e)=>{

//         e.preventDefault();
//         if(Email === ' '){
//             alert("pls enter a correct details");
//         }
//          if(password ===''){
//             alert("pls enter a correct possword")
//         }
//         else {
//             alert("susscessfully submited");
//             Navigate('/Submited')
//             console.log(Email,password);

//         }

//     }


//     return(
//         <>
//         <p> hello</p>

//         <Form onSubmit={data}>
//   <FormGroup>
//     <Label
//       for="exampleEmail"
//       hidden
//     >
//       Email
//     </Label>
//     <Input
//       id="exampleEmail"
//       name="email"
//       placeholder="Email"
//       type="email"
//       value = {Email}
//       onChange={(e)=>SetEmail(e.target.value)}
//     />
//   </FormGroup>
//   {' '}
//   <FormGroup>
//     <Label
//       for="examplePassword"
//       hidden
//     >
//       Password
//     </Label>
//     <Input
//       id="examplePassword"
//       name="password"
//       placeholder="Password"
//       type="password"
//       Value ={password}
//       onChange={(e)=>setPassword(e.target.value)}
//     />
//   </FormGroup>
//   {' '}
//   <Button type="submit"  >
//     Submit
//   </Button>
// </Form>
    
//         </>

//     )
// }
// export default LoginPage