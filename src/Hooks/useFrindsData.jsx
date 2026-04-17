import React, { useEffect, useState } from 'react';

const useFrindsData = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        fetch('/friends.json')
            .then(res => res.json())
            .then(data => {

                setTimeout(() => {
                    setFriends(data);
                    setLoading(false);
                }, 500);
            });
    }, []);
    return {friends,loading}
};

export default useFrindsData;