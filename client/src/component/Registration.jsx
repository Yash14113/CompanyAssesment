




import { Box, Typography, styled, TextField, Button, Checkbox } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registration } from '../service/api';

const Container = styled(Box)`
    height: 100vh;
    width: 100vw;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1200px) { /* For laptops */
        height: 80%;
        padding: 2rem;
    }

    @media (max-width: 900px) { /* For tablets */
        height: 60%;
        width:100%;
        flex-direction: column;
    }
`;

const Wrapper = styled(Box)`
    background: white;
    width: 60%;
    display: flex;
    height: 80%;
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.5);
    
    @media (max-width: 1200px) { /* For laptops */
        width: 80%;
        height: 70%;
    }

    @media (max-width: 900px) { /* For tablets */
        width: 60%;
        height: 40%;
        flex-direction: column;
    }
`;

const Leftbox = styled(Box)`
    width: 50%;
    @media (max-width: 1200px) { /* For tablets */
        width: 50%;
        height: 537px;
    }
    @media (max-width: 900px) { /* For tablets */
        display:none
       
    }
`;

const Rightbox = styled(Box)`
    width: 100%;
    background: white;

    @media (max-width: 900px) { /* For tablets */
        width: 100%;
        
    }
`;



const Authbox = styled(Box)`
    margin: 6rem 2rem;

    @media (max-width: 1200px) { /* For laptops */
        margin: 4rem 1rem;
    }

    @media (max-width: 900px) { /* For tablets */
        margin: 2rem 1rem;
    }
`;

const Linput = styled(TextField)`
    margin-bottom: 20px;
`;

const AuthButton = styled(Button)`
    width: 100%;
    margin-top: 2rem;
    background: black;
    text-transform: none;
`;

const Forgot = styled(Button)`
    color: black;
    font-size: 14px;
    text-transform: none;
    &:hover {
        background-color: inherit;
        box-shadow: none;
    }
`;

const initialDetails = {
    name: '',
    age: '',
    company: '',
    role: ''
};


function Registration() {
    const [details, setDetails] = useState(initialDetails);
    const navigate =useNavigate()
    


    function handleChange(e) {
        setDetails({ ...details, [e.target.name]: e.target.value });
    }

    async function handlesubmit(){
        const res=await registration(details)
        if(!res) return
        navigate('/home')
        

    }

    

    return (
        <Container>
            <Wrapper>
                <Rightbox>
                        <Authbox>
                            <Typography
                                style={{
                                    fontWeight: 500,
                                    fontSize: 40,
                                    lineHeight: '44px',
                                    marginBottom: 10
                                }}
                            >
                                Register Yourself Please
                            </Typography>
                            
                            <Linput
                                variant="standard"
                                placeholder="Name"
                                name="name"
                                onChange={handleChange}
                                fullWidth
                            />
                            <Linput
                                variant="standard"
                                placeholder="Age"
                                name="age"
                                onChange={handleChange}
                                fullWidth
                            />
                            <Linput
                                variant="standard"
                                placeholder="Current company"
                                name="company"
                                onChange={handleChange}
                                fullWidth
                            />
                            <Linput
                                variant="standard"
                                type="text"
                                placeholder="Role"
                                name="role"
                                onChange={handleChange}
                                fullWidth
                            />
                           
                            <AuthButton onClick={handlesubmit} variant="contained">Register</AuthButton>
                        </Authbox>
                   
            </Rightbox>
        </Wrapper>
    </Container>
);
}

export default Registration;
