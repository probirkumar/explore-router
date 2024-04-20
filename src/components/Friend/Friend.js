import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = ({friend}) => {
    const {id, name, email, username} = friend;
    return (
        <div className='friend'>
            <h2>name: {name}</h2>
            <p>email: {email}</p>
            <p><small>username: <Link to={`/friends/${id}`}>{username}</Link></small></p>
        </div>
    );
};

export default Friend;