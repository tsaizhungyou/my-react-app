/*
import { createContext , useContext } from "react";
import SignUpContext from "../container/sigin/Store/SiginStore";

export const RootStoreContext = createContext();

const RootStore = ({ children }) =>{
    const SignUpStore = SignUpContext();
    return(
        <RootStoreContext.Provider value={{SignUpStore}}>
            {children}
        </RootStoreContext.Provider>
    )
}
export const useStore = () =>useContext(RootStoreContext);
export default RootStore;
*/
import { createContext, useContext } from "react"; // 1
import SignUpContext from "../container/sigin/Store/SiginStore"; // 6

export const RootStoreContext = createContext(); // 2
const RootStore = ({ children }) => {
  // 3
  const SignUpStore = SignUpContext(); // 7

  return (
    <RootStoreContext.Provider
      value={{
        SignUpStore, // 8
      }}
    >
      {children}
    </RootStoreContext.Provider>
  );
};
export const useStore = () => useContext(RootStoreContext); // 5

export default RootStore; // 4