import { useState } from "react";
import { FriendContext } from "./CreateContext";





const Context = ({children}) => {

 const [calladd,setCalladd]=useState([]);

//  const [textAdd,setTextAdd]=useState([]);
 const [active,setActive]=useState('');

 
  const data={
    calladd,
    setCalladd,
    // textAdd,
    // setTextAdd,
    active,
    setActive
  }
    return (
       <FriendContext.Provider value={data}>
        {children}
       </FriendContext.Provider>
    );
};

export default Context;