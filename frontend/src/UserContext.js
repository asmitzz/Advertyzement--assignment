import { createContext, useContext, useReducer } from "react";

export const UserContext = createContext();

const UserContextProvider = ({children}) => {
    const userReducer = (state,action) => {
       switch(action.type){
           case "SET_USERS":
               return { status:"fulfilled",users:state.users.concat(action.payload.users) };
           case "PENDING":
               return {...state,status:"pending"}
           case "FAILED":
               return {...state,status:"failed"}
           default:
            return state
       }
    }
    const [{ users,status }, dispatch] = useReducer(userReducer,{users:[],status:"idle"});

    return <UserContext.Provider value={{users,status,dispatch}}>{children}</UserContext.Provider>
}

export default UserContextProvider;

export const useUsers = () => {
    return useContext(UserContext);
}