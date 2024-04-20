import React from 'react';
import './Post.css';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const {id, title, body } = post;

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/post/${id}`);
    };


    return (
        <div className='post'>
            <p>{title}</p>
            <p><small>{body}</small></p>

            <Link to={`/post/${id}`}>Visit: {id}</Link>
            <button>
                <Link to={`/post/${id}`}>Show Details: {id}</Link>
            </button>
            <button onClick={handleNavigate}>Show Details2</button>
        </div>
    );
};

export default Post;