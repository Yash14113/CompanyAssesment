import { Box, Typography, styled, TextField, Button, Checkbox } from '@mui/material';
import { useState } from 'react';
import { authenticateSignup } from '../service/api';
import { Link,useNavigate } from 'react-router-dom';

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
    width: 50%;
    background: white;

    @media (max-width: 900px) { /* For tablets */
        width: 100%;
        
    }
`;

const Image = styled('img')`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 900px) { /* For tablets */
        height: 100%;
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
    username: '',
    email: '',
    password: ''
};

const loginInitialDetails = {
    email: '',
    password: ''
};

function Signup() {
    const [details, setDetails] = useState(initialDetails);
    const [signup, setSignup] = useState(true);
    const [loginField, setLoginField] = useState(loginInitialDetails);
    const navigate = useNavigate(); 

    function handleClick() {
        setSignup(!signup);
    }

    function handleChange(e) {
        setDetails({ ...details, [e.target.name]: e.target.value });
    }

    function handleLoginChange(e) {
        setLoginField({ ...loginField, [e.target.name]: e.target.value });
    }

    async function handlesubmit(){
        const res=await authenticateSignup(details);
        console.log("user created successfully",res)
        if(!res)return
        navigate('/registration')
    }
    const image =
        'https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    return (
        <Container>
            <Wrapper>
                <Leftbox>
                    <Image src={image} alt="Signup" />
                </Leftbox>
                <Rightbox>
                    {signup ? (
                        <Authbox>
                            <Typography
                                style={{
                                    fontWeight: 500,
                                    fontSize: 40,
                                    lineHeight: '44px',
                                    marginBottom: 10
                                }}
                            >
                                Sign Up
                            </Typography>
                            <Typography
                                style={{
                                    fontWeight: 400,
                                    fontSize: 16,
                                    lineHeight: '26px',
                                    marginBottom: 10
                                }}
                            >
                                Already have an account?{' '}
                                <span
                                    style={{ color: 'blue', cursor: 'pointer' }}
                                    onClick={handleClick}
                                >
                                    Sign in
                                </span>
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
                                placeholder="Username"
                                name="username"
                                onChange={handleChange}
                                fullWidth
                            />
                            <Linput
                                variant="standard"
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                                fullWidth
                            />
                            <Linput
                                variant="standard"
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleChange}
                                fullWidth
                            />
                            <Box style={{ display: 'flex' }}>
                                <Checkbox />
                                <Typography style={{ marginTop: '.6rem', fontSize: 16 }}>
                                    I agree with{' '}
                                    <span style={{ color: 'blue', cursor: 'pointer' }}>
                                        Privacy Policy
                                    </span>{' '}
                                    and{' '}
                                    <span style={{ color: 'blue', cursor: 'pointer' }}>
                                        Terms of Use
                                    </span>
                                </Typography>
                            </Box>
                            <AuthButton onClick={handlesubmit} variant="contained">Sign up</AuthButton>
                        </Authbox>
                    ) : (
                        <Authbox>
                        <Typography
                            style={{
                                fontWeight: 500,
                                fontSize: 40,
                                lineHeight: '44px',
                                marginBottom: 10
                            }}
                        >
                            Sign In
                        </Typography>
                        <Typography
                            style={{
                                fontWeight: 400,
                                fontSize: 16,
                                lineHeight: '26px',
                                marginBottom: 10
                            }}
                        >
                            Don't have an account?{' '}
                            <span
                                style={{ color: 'blue', cursor: 'pointer' }}
                                onClick={handleClick}
                            >
                                Sign up
                            </span>
                        </Typography>
                        <Linput
                            variant="standard"
                            placeholder="Email"
                            name="email"
                            onChange={handleLoginChange}
                            fullWidth
                        />
                        <Linput
                            variant="standard"
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleLoginChange}
                            fullWidth
                        />
                        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Checkbox />
                            <Forgot
                                variant="text"
                                style={{ marginTop: '.6rem', fontSize: 16 }}
                            >
                                Forgot password
                            </Forgot>
                        </Box>
                        <AuthButton variant="contained">Sign In</AuthButton>
                    </Authbox>
                )}
            </Rightbox>
        </Wrapper>
    </Container>
);
}

export default Signup;
