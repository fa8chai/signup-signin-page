import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';
import "../style-sheets/sign-up.css";
import image from "../im/image.png";
import D from "../im/D.png";
import {Link}  from 'react-router-dom';
const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  const valid = (errors) => {
    let validf = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (validf = false)
    );
    return validf;
  }

  class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
          fname: null,
          lname:null,
          email: null,
          pass: null,
          check:false,
          errors: {
            fname: '',
            lname:'',
            email: '',
            pass: '',
          }
        };
      }

    
    handelchange = (e) => {
    
  const { name, value } = e.target;
  let errors = this.state.errors;

  switch (name) {
    case 'fname': 
      errors.fname = 
        value.length < 2
          ? 'First Name must be at least 2 characters long!'
          : '';
      break;
      case 'lname': 
      errors.lname = 
        value.length < 2
          ? 'Last Name must be at least 2 characters long!'
          : '';
      break;
    case 'email': 
      errors.email = 
        validEmailRegex.test(value)
          ? ''
          : 'Email is not valid!';
      break;
    case 'pass': 
      errors.pass = 
        value.length < 8
          ? 'Password must be 8 characters long!'
          : '';
      break;
    default:
      break;
  }

  this.setState({errors, [name]: value})
  }





    handelsubmit = (e) => {
             
            e.preventDefault();
            if(valid(this.state.errors)) {
                console.info('Valid Form')
                e.target.reset();
              }else{
                console.error('Invalid Form')
                alert('Invalid Form')
              }
            
            
    


            
            
            
            
    }
       

    render(){
      const {errors} = this.state;
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
                    <h4>Create new account</h4>
                    <p >use your work email to create new account</p>

                    <form  action="#" className="was-validated" onSubmit={this.handelsubmit}> 
                                           


                    <div>
                      <TextField
                      required={true}
                    onChange={this.handelchange}
                    
                       id="outlined-namef"
                       label="First Name"
                       className="fname"
                       name="fname"
                       margin="normal"
                       variant="outlined"
                    />
                     {errors.fname.length > 0 && 
                       <span className='error'>{errors.fname}</span>}
                    </div>
                   
                    <div><TextField
                    required={true}
                       id="outlined-namel"
                       label="Last Name"
                       
                       className="lname"
                       name="lname"
                       onChange={this.handelchange}
                       margin="normal"
                       variant="outlined"
                    />
                    {errors.lname.length > 0 && 
                       <span className='error'>{errors.lname}</span>}
                   
                    </div>
                    
                   
                   
                    <div><TextField
                    required={true}
                       id="outlined-email-input"
                       label="Email"
                       className="email"
                       onChange={this.handelchange}
                       type="email"
                       
                       name="email"                  
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                    />
                    {errors.email.length > 0 && 
                       <span className='error'>{errors.email}</span>}
                    </div>
                    
                    <div><TextField
                    required={true}
                        id="outlined-password-input"
                        label="Password"
                        placeholder="********"
                        className="pass"
                        onChange={this.handelchange}
                        type="password"
                        name="pass"
                        autoComplete="current-password"
                         margin="normal"
                         variant="outlined"
                     />
                     {errors.pass.length > 0 && <span 
                     className='error'>{errors.pass}</span>}
                     </div>
                     
                          <div id="foo" className="form-group form-check">
                              <label className="form-check-label">
                                  <input o   value={this.state.check} required={true} className="form-check-input" type="checkbox"></input>
                                  I have read the Terms and Conditions
                              </label>
                            </div>
                            <button className=" btn btn-primary btn-block" type="submit">SIGN UP NOW</button>
                    </form>


                    <p>Have account?<Link to="/signin"> Login</Link></p>

                        </div>
                        
           </div>
            </div>


        )
    }



}

export default Signup;