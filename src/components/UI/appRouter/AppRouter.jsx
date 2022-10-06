import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Error } from '../../../pages/Error';
import { About } from '../../../pages/About';
import { Posts } from '../../../pages/Posts';
import { PostIdPage } from '../../../pages/PostIdPage';


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/posts/:id" element={<PostIdPage />} />

            <Route path="*" element={<Error />} />
        </Routes>
    )
}
