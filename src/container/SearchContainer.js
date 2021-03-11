import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Search from '../page/Search';

function SearchContainer( props ) {
    const userId = props.location.id || '용석짱짱121';
    const [ matches, setMatches ] = useState([]);
    const [ winRate, setWinRate ] = useState();
    const [ retire, setRetire ] = useState();
    const [ detailTab, setDetailTab ] = useState([]);
    const [ limit, setLimit ] = useState(10);

    const searchMatchDetails = async ( matchId ) => {
        const header = {
            headers: {
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiNzM4NjMzMjE1IiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExMzkzIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjUwMDoxMCIsIm5iZiI6MTYxNDkyOTM1NCwiZXhwIjoxNjMwNDgxMzU0LCJpYXQiOjE2MTQ5MjkzNTR9.njyfxqNCxFjACrhNHRAfDuj00MSyGIOTjqDp0YjybYs'
            }
        };
        const res = await axios.get('https://api.nexon.co.kr/kart/v1.0/matches/' + matchId, header);
        return res;
    }

    useEffect(() => {
        const getUserData = async () => {
            const header = {
                headers: {
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiNzM4NjMzMjE1IiwiYXV0aF9pZCI6IjIiLCJ0b2tlbl90eXBlIjoiQWNjZXNzVG9rZW4iLCJzZXJ2aWNlX2lkIjoiNDMwMDExMzkzIiwiWC1BcHAtUmF0ZS1MaW1pdCI6IjUwMDoxMCIsIm5iZiI6MTYxNDkyOTM1NCwiZXhwIjoxNjMwNDgxMzU0LCJpYXQiOjE2MTQ5MjkzNTR9.njyfxqNCxFjACrhNHRAfDuj00MSyGIOTjqDp0YjybYs'
                }
            };
            const user = await axios.get('https://api.nexon.co.kr/kart/v1.0/users/nickname/'+ userId, header);
            const match = await axios.get('https://api.nexon.co.kr/kart/v1.0/users/'+ user.data.accessId +'/matches?limit=' + limit, header);
            const mat = match.data.matches[0].matches;
            
            console.log( mat );
            let win = 0, ret = 0;
            let detail = [];

            mat.map((e, idx) => {
                e.matchResult === '1' && win++;
                e.player.matchRank === '99' && ret++;
                detail[idx] = {
                    idx: idx,
                    value: 'off'
                };
                return true;
            });

            setDetailTab( detail );
            setWinRate( win );
            setRetire( ret );
            setMatches( mat );
        }
        getUserData();
        console.log('user ID is changed!!');
    }, [userId, limit]);

    useEffect(() => {
        console.log( detailTab );
    }, [detailTab])

    return (
        <Search 
            matches = { matches }
            userName = { userId }
            winRate = { winRate }
            retire = { retire }
            searchMatchDetails = { searchMatchDetails }
            detailTab = { detailTab }
            setDetailTab = { setDetailTab }
            setLimit = { setLimit } 
        />
    )
}

export default SearchContainer;