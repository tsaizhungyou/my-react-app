/*import React, { useState } from 'react'
import axios from 'axios'

const Login = ({ error}) =>{
    const [details , setDetails] = useState({phone:"" , email:"" , password:""});

    const submitHandler = (e) =>{
        e.preventDefault();
    };

        const require = async () => {
            const requireLogin = await axios({
                method: "POST",
                url: 'https://evening-cliffs-38545.herokuapp.com/api/user',
                data: details,
                headers: {
                    "content-type": "application/json; charset=utf-8"
                }
            })
            console.log(requireLogin);
        }
    


    return(
        <form onSubmit = {submitHandler}>
            <div className='form-inner'>
                <h2>Login</h2>
                {error !== "" ?<div className='error'>{error}</div> : ""}
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input
                       type='text'
                       name='name'
                       id='name'
                       onChange={(e) => setDetails({ ...details, phone: e.target.value})}
                       value = {details.phone}
                    /> 
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input
                       type='text'
                       name='email'
                       id='email'
                       onChange={(e) => setDetails({ ...details, email: e.target.value})}
                       value = {details.email}
                    /> 
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        onChange={(e) => 
                            setDetails({ ...details,password: e.target.value})
                        }
                        value ={details.password}
                    />
                </div>
                <button onClick={require}>123123</button>
            </div>
        </form>
    );
};
export default Login;*/