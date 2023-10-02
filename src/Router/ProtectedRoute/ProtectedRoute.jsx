import React, { useEffect } from 'react'
import { userAuth } from '../../Auth/Auth'
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ component }) {

    let { user } = userAuth();
    let navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login')
            alert("Please sign Your Account")
        }
    }, [])
    return (
        <>
            {component}
        </>
    )
}
