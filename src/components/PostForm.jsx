import React from 'react'
import { MyInput } from './UI/input/MyInput';
import { MyButton } from './UI/button/MyButton';
import { useState } from 'react';

export const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({ title: '', body: '' });

    }


    return (
        <form>
            {/* управляемый компонент react */}
            <MyInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="post name"
            />

            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder="post description"
            />
            <MyButton onClick={addNewPost}>create post</MyButton>
        </form>
    )
}
