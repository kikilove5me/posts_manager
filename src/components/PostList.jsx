import React from 'react'
import { TransitionGroup } from 'react-transition-group'
import { CSSTransition } from 'react-transition-group'
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
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition key={post.id} timeout={500} classNames="post">
                        <PostItem remove={remove} number={index + 1} post={post} />
                    </CSSTransition>
                )}

            </TransitionGroup>


        </div>
    )
}

