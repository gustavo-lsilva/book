import React, {useState, useEffect} from 'react';

import { Login } from '../Pages/Login';
import { Home } from '../Pages/Home';

export function Route() {
    const [login, setLogin] = useState(false)

    useEffect(() => {
        const inLogin = localStorage.getItem('user');

        if (inLogin) {
            setLogin(true);
        }
    }, []);

   

  return (
    <>
        {
            !login ? <Login /> : <Home />
        }
    </>
  );
}

