import { createContext, useState } from "react";

const initialValue = false;

export const UserContext = createContext(initialValue);

export const UserContextProvider = ({ children }) => {
  const [userStatus, setUserStatus] = useState(initialValue);

  const changeStatus = (status) => {
    if (status) {
      setUserStatus(true);
    } else {
      setUserStatus(false);
    }
  };

  return (
    <UserContext.Provider value={{ userStatus, changeStatus }}>
      {children}
    </UserContext.Provider>
  );
};
