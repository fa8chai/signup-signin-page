import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import "../style-sheets/sign-in.css";
import image from "../im/image.png";
import D from "../im/D.png";
import {Link}  from 'react-router-dom'


class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {email:"",pass:""}
        }
    

        
     handelchange = (e) => {
            this.setState({
                [e.target.classNam] : [e.target.value]
            })
       }
    handelsubmit = (e) => {
            e.preventDefault();
            console.log("Done !!");
            e.target.reset();
       }
    
    
    responseFacebook = (response) => {
       console.log("hi")
    }

    responseGoogle = (response) => {
        console.log("google")
    }
       
    render(){
        
        return (
            <div className="container-fluid" >
            <div className="row">

                <div className="col-md-5" style={{height:"100vh"}}>
                      <img src={image} width='100%' height="100%" alt="logo"></img>
                      <h3>Lorem ipsum dolor sit amet, at fusce lectus diam adipiscing nulla</h3>
                </div>
               <div className="col-md-7" id="fo">
                   <div id="logo">
                   <img src={D} alt="devias-logo"></img>
                       <h5>Devias</h5>
                       <p id="lp">recourcesforwebpros</p>
                       
                   </div>

                   <h1>Sign in</h1>
                   <p>Sign in with social media</p>
                   <div id="login">

                           <div onClick={this.responseFacebook} className="fb-login-button" data-width="400px" data-size="large" data-button-type="login_with" data-auto-logout-link="false" data-use-continue-as="false"></div>
                            <br></br>
                            <br></br>
                           <div style={{width:"400px"}} id="google"  className="g-signin2" data-onsuccess={this.responseGoogle}></div>
                   </div>
                    
                    
                    
                    
                    
                    
                    <p className="fb" style={{textAlign: "center"}}>or login with email</p>
                    <form action="#" className="was-validated" onSubmit={this.handelsubmit}> 
                    <div className="tf"><TextField
                       id="outlined-email-input"
                       label="Email"
                       className="email"
                       onChange={this.handelchange}
                       type="email"
                       name="email"
                       required={true}
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                    /></div>
                    <div><TextField
                        id="outlined-password-input"
                        label="Password"
                        className="pass"
                        onChange={this.handelchange}
                        type="password"
                        required={true}
                        autoComplete="current-password"
                         margin="normal"
                         variant="outlined"
                     /></div>
                          
                          <button className=" btn btn-primary btn-block" type="submit">SIGN IN</button>
                    </form>


                    <p>Don’t have an account?<Link to="/"> Sign Up</Link></p>

                        </div>
                        
           </div>
            </div>


        )
    }



}

export default Signup;