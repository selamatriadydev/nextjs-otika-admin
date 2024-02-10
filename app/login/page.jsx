import LoginForm from "../ui/login/loginForm";
import MediaSosial from "../ui/login/mediaSosial/mediaSosial";

const Login = ()=> {
    return(
        <div className="card card-primary">
        <div className="card-header">
          <h4>Login</h4>
        </div>
        <div className="card-body">
          <LoginForm/>
          <MediaSosial/>
        </div>
      </div>
    )
}

export default Login;