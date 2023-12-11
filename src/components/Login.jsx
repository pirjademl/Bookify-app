import '../utils/login.css';


export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event);

    }
    const handleChange=(event)=>{
        console.log(event.target.name)
        console.log(event.target.value);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <p>Login With your account to continue where you left off</p>
                <div className="input-wrapper">
                    <div className="input-label">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="email-input-wrapper">
                        <input onChange={handleChange} type="email" name="emailid" id="email" className="input" />
                    </div>
                    <div className="password-label">
                        <label htmlFor="pwd">Password</label>
                    </div>
                    <div className="password-input-wrapper">
                        <input type="password" id="pwd" className="input" />
                    </div>
                    <div className="remember-me-checkbox-wrapper">
                        <input type="checkbox" />
                        <span> Remember me</span>
                    </div>
                    <button type="submit" >submit</button>
                    <div className="additional-actions-container">
                        <p>Dont have an account    <a href="#signup">SIgnup</a></p>
                        <a href="#forgotpassword">Forgot password</a>
                    </div>
                </div>
            </form> 

        </div>
    )
}
