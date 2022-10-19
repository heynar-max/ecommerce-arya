import './Login.css'


export const Login = () => {
    return (
        
        <div className="login__container">
        <form className="login__form">
            <div className="login__content">
                <label  className="form-label">Email address</label>
                <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp"
                />
                <label  className="form-label ">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
        </div>
    )
}