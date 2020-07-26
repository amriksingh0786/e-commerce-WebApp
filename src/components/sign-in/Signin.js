import React from 'react';
import './Signin.css'
import FormInput from '../form-input/form-input.js'
import CustomButton from '../custom-button/custom-button.js'
import {signInWithGoogle} from '../../firebase/firebase-utility';

class Signin extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }   
    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }
    handleChange=(event)=>{
        const {name,value}=event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label='Email' 
                    required />
                    <FormInput 
                    name='password' 
                    type='password' 
                    value={this.state.password} 
                    label='Password' 
                    handleChange={this.handleChange} 
                    required/>
                    <div className='button'>
                    <CustomButton type='submit'>Sign IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Sign IN With Google{' '}</CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}

export default Signin