import React,{useState,} from 'react';
import {useNavigate} from 'react-router-dom';
import {Navbar,Input,Button, Card, CardBody, Row,CardTitle,CardSubtitle,CardText, Col, CardHeader} from 'reactstrap';
import '../NavBar.css'
import   image from '../undraw_secure_login_pdn4 (2).svg';
import profile from '../profile-pic.svg';
function LandPage(){
    const[count ,setCount]= useState(null);
    const[user,setUser] = useState(null);
    const[message,setMessage]=useState('')

    const Navigate = useNavigate()


   

    return(

        <>
        
           
                    <Card className='Cards'
                            style={{
                                width: '18rem',
                                textAlign:"center",
                                justifyContent:"center"

                            }}
                            >
                            
                           
                               <CardHeader >
                                <img src={profile}  style={{
                                    width:"200px"
                                }}/>
                               </CardHeader>
                               <CardBody>
                               <Button  style={{
                                         
                                      }} onClick={()=>Navigate('/SignIn')}> SignIn</Button> <br />
                                      <br />
                                         <Button onClick={()=>Navigate('/SignUp')} > SignUp</Button>
                               </CardBody>
                            
                    </Card>

                    
                   
            


        </>
    )
} 
export default LandPage;