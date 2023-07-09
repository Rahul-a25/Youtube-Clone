import { createContext, useState } from "react";

export const myContext = createContext();

function SendingContext({ children }) {
 const [Data,SetData] =useState([])
 const [DataFilter,SetDataFilter] =useState([])
 const [Detail,SetDetails] = useState([])
 const [detailRight,SetdetailRight] = useState([])

  return (
    <myContext.Provider value={{Data,SetData,Detail,SetDetails,DataFilter,SetDataFilter,detailRight,SetdetailRight}}>
      {children}
    </myContext.Provider>
  );
}
export default SendingContext;