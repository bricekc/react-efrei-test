import { createContext, useState } from 'react';

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (logInfos) => {
    console.log('logInfos', logInfos);
    try {
      setUser(logInfos);
      localStorage.setItem('user', JSON.stringify({ ...logInfos, name: logInfos }));
    } catch (error) {
      console.error('Failed to login:', error);
    }
  };

  return <UserContext.Provider value={{ login, user }}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
