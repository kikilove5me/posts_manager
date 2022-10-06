import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Posts } from '../../../pages/Posts';
import { Login } from '../../../pages/Login';
import { privateRoutes, publicRoutes } from '../../../router/routes';
import { AuthContext } from '../../../context';
import { useContext } from 'react';
import { Loader } from '../loader/Loader';


export const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);
    // if (isLoading) {
    //     return <Loader />
    // }
    return (isAuth
        ? <Routes>
            {privateRoutes.map(route =>
                <Route key={route.path} path={route.path} exact element={< route.component key={route.path} />} />
            )}

            <Route path="*" element={<Posts />} />
        </Routes>


        : <Routes>
            {publicRoutes.map(route =>
                <Route key={route.path} path={route.path} exact element={< route.component key={route.path} />} />
            )}
            <Route path="*" element={<Login />} />
        </Routes>
    );
}
