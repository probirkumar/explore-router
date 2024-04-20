import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    // console.log(friend)
    return (
        <div>
            <h2>About Details: {friend.name}</h2>
            <p>Call Him/Her: {friend.phone}</p>
            <h2>You need everythik all about are there</h2>
        </div>
    );
};

export default FriendDetails;