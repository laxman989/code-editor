import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Alert} from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";

const SignUp = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signUp, googleSignIn } = useUserAuth();

    const handleSubmit = async (e) => {
        setError("");
        e.preventDefault();
        try{
            await signUp(email, password);
            navigate("/Home")
        }
        catch(err){
            setError(err.message);
        }
    }

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try{
            await googleSignIn();
            navigate("/Home");
        }
        catch(err) {
            setError(err.message);
        }
    }

    return (
        <div className="auth-page">
            <div className="p-4 box">
                <h1 className="mb-3">Sign Up!</h1>
                {error && <Alert varient="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formbasicEmail">
                        <p>Username or Email</p>
                        <Form.Control className="input" type="email" onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formbasicPassword">
                        <p>Password</p>
                        <Form.Control className="input" type="password" onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>

                    <Button varient="primary" type="submit" className="auth-btn">Sign Up</Button>
                </Form>
                <hr/>
                <div>
                    <GoogleButton className="google-btn" type="dark" onClick={handleGoogleSignIn} />
                </div>
                <div className="p-4 mt-3 text-center">
                    Already have an account? <Link className="change-auth-type" to="/">Log in</Link>
                </div>
            </div>
        </div>
    )
} 

export default SignUp;