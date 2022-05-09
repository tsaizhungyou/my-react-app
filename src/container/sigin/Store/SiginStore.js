/*
import { useLocalObservable } from "mobx-react-lite";

const state = {
    name:"",
    email:"asd@gmail.com",
    password:"",
};
const SignUpStore = () =>{
    const store = useLocalObservable(() =>({
        ...state,
    }))
    return store;
}
export default SignUpStore;*/
import { useLocalObservable } from "mobx-react-lite";

const initialState = {
  // 1
  phone: "",
  password: "",
  email: "test@gmail.com",
};
const SignUpStore = () => {
  // 2
  const store = useLocalObservable(() => ({
    /* observables */
    ...initialState,
  })); // 3
  return store; // 4
};

export default SignUpStore; // 2