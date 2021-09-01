import axios from "axios";
import { useRef, useState } from "react";
import { useUsers } from "../../UserContext";
import "./Navbar.css";
const Navbar = () => {
    const { dispatch } = useUsers();
    const [page,setPage] = useState(1);
    const [hasMore,setHasMore] = useState(true);
    const cancelTokenRef = useRef();

    const getUsers = async() => {
            if(cancelTokenRef.current){
                cancelTokenRef.current();
            }
            if(!hasMore) return;
            try {
                dispatch({ type:"PENDING" });
                const { data:{data} } = await axios.get(`https://reqres.in/api/users?page=${page}`,{
                    cancelToken: new axios.CancelToken((c) => (cancelTokenRef.current = c))
                });
                setHasMore(data.length > 0)
                dispatch({ type:"SET_USERS",payload:{ users:data } });
                setPage(page + 1);
            } catch (error) {
                dispatch({ type:"FAILED" });
            }
    }
    
    return (
        <nav className="navbar">
           <h1 className="navbar-heading">USERS<span>CART</span></h1>  
           <button className="primary-btn" onClick={getUsers}>Get Users</button>
        </nav>
    );
};

export default Navbar;
