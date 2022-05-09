import React, { useState } from "react";
import Loginfrom from "./Login";
import Welcome from "./LoginStyle"

function App() {
    const adminUser = {
        email:"tsai@gmail.com",
        password:"tsai0905007369"
    };
    const [user , setUser] = useState({name:"",email:""});

    const [error , setError] = useState("");

    const Login = (details) =>{
        if(
            details.email === adminUser.email &&
            details.password === adminUser.password
        ){
            console.log("Logged in");
            setUser({
                name: details.name,
                email: details.email,
            });
        } else{
            console.log("Details do not match")
            setError("Details do not match");
            }
    };

    const Logout = () =>{
        console.log("Logout")
        setUser({name:"",email:""});
    };

    return(
        <div>
            {user.email !== "" ?(
                <Welcome>
                <div>
                    <h2>
                        welcome, <span>{user.name}</span>
                    </h2>
                    <button onClick={Logout}>Logout</button>
                </div>
                </Welcome>

            ) : (
                <Loginfrom Login={Login} error={error} />
            )}
        </div>
    );
}

export default App;