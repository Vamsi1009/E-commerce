import React from 'react';
import '../Body.css';
import {Card,CardBody,CardTitle,CardSubtitle,Button,CardText, Input, Label, CardFooter} from 'reactstrap';
import {useNavigate} from 'react-router-dom'

export  function Body (){
    const Navigate= useNavigate();

    return (
        <>
        <Card
        style={{
            width: '18rem',
            margin:"auto",
            backgroundColor:"green",
            borderRadius:"20px",
            backgroundSize:"cover",
            color:"whitesmoke",
            textAlign:"center",
            marginTop:"120px"
           
            
          }}
        >
            <h3 style={{
                textAlign:"center",
                justifyContent:"center"
            }}> User Login </h3>
            <CardBody>
                    <CardTitle tag="h5">
                        <Label> Name :</Label>
                    <Input type="text" placeholder='Enter Name'> </Input>
                    </CardTitle>
                    <CardTitle tag="h5">
                        <Label> PhoneNumber :</Label>
                    <Input type="number" placeholder='Enter Valid number'> </Input>
                    </CardTitle>
                    
                    
                <Button style={{
                    justifyContent:"center",
                    justifyItems:"center",
                    textAlign:"center",
                    margin:"auto",
                    
                }}> 
                SignUp
                </Button>
            </CardBody>
            <CardFooter >
                <Button  className="SignIn" onClick={()=>Navigate('/SignIn')}  > SignIn </Button>
            </CardFooter>
        </Card>
       
        </>
    )
}
export default Body