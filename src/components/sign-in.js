import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import "../style-sheets/sign-in.css";
import image from "../im/image.png";
import D from "../im/D.png";
import {Link}  from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';


class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {email:"",pass:""}
        }
    

        
     handelchange = (e) => {
            this.setState({
                [e.target.className] : [e.target.value]
            })
       }
    handelsubmit = (e) => {
            e.preventDefault();
            console.log("Done !!");
            e.target.reset();
       }
    
    
    
    responseFacebook = response => {
      
       alert("Hello "+response.name);
       
       
    }

    responseGoogle = response => {
        
       alert("Hello "+response.givenName);
        
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
                   <FacebookLogin
        
        
        appId="2079820965479150" 
        
        fields="name,email,picture"
        callback={this.responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />   
                   
                   <br />
      <br />
      

      <GoogleLogin
        clientId="935485848669-8509ciprtgkg61n1afsufp0omfo9ht55.apps.googleusercontent.com"
        className="my-google-button-class"
        buttonText="Login With Google"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        
      /> 
      <br />
<br />

                    
                    
                    
                    
                    
                    
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
                    placeholder="********"
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

export default Signin;