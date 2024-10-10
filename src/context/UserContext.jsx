import { createContext, useState } from 'react';

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  function login(logInfos) {
    try {
      setUser(logInfos);
    } catch (error) {
      console.error('Failed to login:', error);
    }
  }

  return <UserContext.Provider value={{ login, user }}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
