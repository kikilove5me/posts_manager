import React from 'react'
import PostItem from './PostItem'


//becouse props is obj -> deconstruction {props}
export const PostList = ({ posts, title, remove }) => {

    if (!posts.length) {
        return (<h1 style={{ textAlign: 'center' }}>
            post's not found!
        </h1>)
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {title}
            </h1>
            {posts.map((post, index) => <PostItem remove={remove} number={index + 1} post={post} key={post.id} />)}

        </div>
    )
}

