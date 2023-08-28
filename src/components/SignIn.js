import React from 'react';
import {Navigate} from 'react-router-dom'
import {Card,CardBody,CardTitle,Label,Input,Button} from 'reactstrap'

function SignIn(){

    return(
        <>
         <Card
        style={{
            width: '18rem',
            margin:"auto",
            marginTop:"150px",
            backgroundColor:"green",
            borderRadius:"20px",
            backgroundSize:"cover",
            color:"whitesmoke",
            textAlign:"center",
            backgroundColor:"ActiveCaption",
            borderColor:"whitesmoke"
        
           
            
          }}
        >
            <h3 style={{
                textAlign:"center",
                justifyContent:"center"
            }}> User Login </h3>
            <CardBody>
                    <CardTitle tag="h5">
                        <Label> PhoneNumber</Label>
                    <Input type="number" placeholder='Enter Name'> </Input>
                    </CardTitle>
                    <CardTitle tag="h5">
                        <Label> OTP </Label>
                    <Input type="number" placeholder='Enter Valid OTP'> </Input>
                    </CardTitle>
                    
                    
                <Button style={{
                    justifyContent:"center",
                    justifyItems:"center",
                    textAlign:"center",
                    margin:"auto",
                    
                }} > 
                SignIn
                </Button>
                </CardBody>
                </Card>
                


        </>
    )
}

export default SignIn;