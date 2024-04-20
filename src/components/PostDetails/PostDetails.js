import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    // console.log(post)

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/friends/${id}`)
    }

    return (
        <div>
            <h2>All Post Details : {id}</h2>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleNavigate}>Get The Author</button>
        </div>
    );
};

export default PostDetails;