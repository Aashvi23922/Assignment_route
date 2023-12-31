import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const AuthContext = createContext(null);

export default function Auth({ children }) {
    const navigate = useNavigate();

    let [user, setUser] = useState(null);
    let [searchData, setSearchData] = useState('');


    function login(userData) {
        localStorage.setItem("loginUser", JSON.stringify(userData));
        setUser(userData);
        navigate('/');
    }

    function logout() {
        localStorage.removeItem("loginUser");
        setUser(null);
        navigate('/');

    }

    useEffect(() => {
        let data = localStorage.getItem("loginUser")
        if (data) {
            setUser(JSON.parse(data));
        }
    })
    return (
        <>
            <AuthContext.Provider value={{ login, logout, user, searchData, setSearchData }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export const userAuth = () => {
    return useContext(AuthContext);
}
