
import React, { useState, useEffect } from "react";
import { PostService } from "../API/PostService";
import { PostFilter } from "../components/PostFilter";
import { PostForm } from "../components/PostForm";
import { PostList } from "../components/PostList";
import { MyButton } from "../components/UI/button/MyButton";
import { MyModal } from "../components/UI/myModal/MyModal";
import { usePosts } from "../hooks/usePosts";
import { Loader } from "../components/UI/loader/Loader";
import { Pagination } from "../components/UI/pagination/Pagination";

import '../styles/App.css';
import { useFetching } from "../hooks/useFetching";
import { getPageCount, getPagesArray } from "../utils/pages";



export function Posts() {
    const [posts, setPosts] = useState([
        { id: 1, title: "Max's post", body: 'Description' },
        { id: 2, title: "Pippo's post", body: 'Description' },
        { id: 3, title: "Jenny's post", body: 'Description' }
    ]);

    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);



    const [fetchPosts, isPostsLoading, error] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    })

    //if is empty it will be called once
    useEffect(() => {
        fetchPosts(limit, page);
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    //gets post from child Component
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const changePage = (page) => {
        setPage(page);
        fetchPosts(limit, page);
    }

    return (
        <div className="App">
            <button onClick={fetchPosts}>GET POSTS</button>
            <MyButton
                style={{ marginTop: 30 }}
                onClick={() => setModal(true)}
            >
                create post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                {/* create input bars and button */}
                <PostForm create={createPost} />
            </MyModal>

            {/* filter drop-down and search bar */}
            <PostFilter
                filter={filter}
                setFilter={setFilter} />

            <hr style={{ margin: '15px 0' }} />
            {error && <h1>error by Loading!</h1>}
            {isPostsLoading
                ? <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}> < Loader /> </div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="list of Posts 1" />
            }
            <Pagination page={page} changePage={changePage} totalPages={totalPages} />
        </div >
    );
}