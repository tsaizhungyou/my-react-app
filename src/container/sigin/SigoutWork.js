/* eslint-disable eqeqeq */
import React  from "react";
import { useStore } from "../../Store";
import { observer } from "mobx-react-lite";
import axios from "axios";

function SigoutWork() {
    const {
        SignUpStore: { email, name, password, updatedata },
      } = useStore();
    const submitHandler = e => {
        e.preventDefault();
    }
const imformation = { name, password, email };
    const require = async () => {
        const requireLogin = await axios({
            method: "POST",
            url: "https://evening-cliffs-38545.herokuapp.com/api/user",
            data: imformation,
        })
        console.log(requireLogin);
    }
    return (
        <div className="App">
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" onChange={(e) => { updatedata("name", e.target.value); }} value={name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Eamil:</label>
                        <input type="email" name="email" id="email" onChange={(e) => { updatedata("email", e.target.value); }} value={email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={(e) => { updatedata("password", e.target.value); }} value={password} />
                    </div>
                    <input type="submit" value="LOGIN" />
                    <div>
                        <button onClick={require}>signin</button>
                    </div>
                    <div>
                        <button on
                    </div>
                </div>
            </form>
        </div>
    )
}
 export default observer(SigoutWork);