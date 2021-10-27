import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { PostService } from '../API/PostService';
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";

const PostIDPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async id => {
        const response = await PostService.getByID(id);
        setPost(response.data);
    });
    const [fetchComments, isCommentsLoading, commentError] = useFetching(async id => {
        const response = await PostService.getCommentsByPostID(id);
        setComments(response.data);
    });
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, []);

    return (
        <div>
            <h1>Open post with ID: {params.id}</h1>
            {
                isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>Comments</h1>
            {
                isCommentsLoading
                ? <Loader/>
                : comments.map(comment => {
                    return (
                        <div style={{ marginTop: 20 }}>
                            <h3>{ comment.email }</h3>
                            <div>{ comment.body }</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostIDPage;