import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Search from '../page/Search';

function SearchContainer( props ) {
    const userId = props.location.id;
    const [ matches, setMatches ] = useState([]);
    

    useEffect(() => {
        const getUserData = async () => {
            const header = {
                headers: {
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiNzM4NjMzMjE1IiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExMzkzIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjUwMDoxMCIsIm5iZiI6MTYxNDkyOTM1NCwiZXhwIjoxNjMwNDgxMzU0LCJpYXQiOjE2MTQ5MjkzNTR9.njyfxqNCxFjACrhNHRAfDuj00MSyGIOTjqDp0YjybYs'
                }
            };
            const user = await axios.get('https://api.nexon.co.kr/kart/v1.0/users/nickname/'+ userId, header);
            const match = await axios.get('https://api.nexon.co.kr/kart/v1.0/users/'+ user.data.accessId +'/matches', header);
            setMatches( match.data.matches[0].matches );
        }
        getUserData();
    }, []);

    return (
        <Search 
            matches = { matches }
            userName = { userId }
        />
    )
}

export default SearchContainer;