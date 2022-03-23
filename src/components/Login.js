import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Alert} from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login, googleSignIn } = useUserAuth();

    const handleSubmit = async (e) => {
        setError("");
        e.preventDefault();
        try{
            await login(email, password);
            navigate("/Home");
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
                <h1 className="mb-3">Log In!</h1>
                {error && <Alert varient="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <p>Username or Email</p>
                        <Form.Control className="input" type="email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <p>Password</p>
                        <Form.Control className="input" type="password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Button varient="primary" type="submit" className="auth-btn">Login</Button>
                </Form>
                <hr/>
                <div>
                    <GoogleButton className="google-btn" type="dark" onClick={handleGoogleSignIn} />
                </div>
                <div className="p-4 mt-3 text-center">
                    Need an account? <Link className="change-auth-type" to="/SignUp">Sign up now!</Link>
                </div>
            </div>
        </div>
    )
} 

export default Login;