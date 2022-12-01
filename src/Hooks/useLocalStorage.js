import { useState, useEffect } from "react";

const useLocalStorage = () => {
    const [loggedInUser, setLoggedInUser] = useState(null)

  useEffect(
    () => {
        const loggedInUser = localStorage.getItem('user')
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser)
            setLoggedInUser(foundUser)
        }
      }
    ,
    [])
  
  return { loggedInUser };
};

export default useLocalStorage;
