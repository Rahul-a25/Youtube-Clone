import { createContext, useState } from "react";

export const myContext = createContext();

function SendingContext({ children }) {
 const [Data,SetData] =useState([])
 const [Detail,SetDetails] = useState([])

  return (
    <myContext.Provider value={{Data,SetData,Detail,SetDetails }}>
      {children}
    </myContext.Provider>
  );
}
export default SendingContext;