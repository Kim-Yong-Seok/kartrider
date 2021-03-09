import React from 'react';
import Header from '../components/Header';
import tracks from '../metadata/track.json';
import karts from '../metadata/kart.json';

function MatchList({ match }) {
    // console.log( match );
    const { playerCount, player, matchResult, startTime, trackId } = match;
    const { matchRank, matchTime, kart } = player;

    function msToTime(s) {

        function pad(n, z) {
          z = z || 2;
          return ('00' + n).slice(-z);
        }
      
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
      
        return pad(mins) + "'" + pad(secs) + "'" + pad(ms, 3);
    }

    const curruntDate = new Date();
    const startDate = new Date( startTime );
    const dateDiff = Math.floor((curruntDate - startDate) / (1000*60*60*24));
    const trackName = tracks.find( e => {
        return e.id === trackId;
    });
    const kartName = karts.find( e => {
        return e.id === kart;
    });
    const kartImg = '../metadata/kart/' + kart + '.png';
    const retire = matchRank === "99" ? 'retire' : matchRank + '/' + playerCount;

    console.log( kartImg );
    return (
        <div className="match-list">
            <div className={`aside-color ${matchResult === "1" ? 'win' : 'lose'}`}></div>
            <div className="match-info">
                <p className="date">{ dateDiff }일전</p>
                <p className="map">MAP</p>
                <p className="win-or-lose">{ matchResult === "1" ? '승리' : '패배' }</p>
                <p className="record">기록</p>
            </div>
            <div className="match-detail">
                <p className="map">{ trackName ? trackName.name : '알 수 없는 트랙' }</p>
                <p className="rank">#{retire}</p>
                <div className="div"></div>
                <p className="record">{ msToTime( matchTime ) }</p>
            </div>
            <div className="div1"></div>
            <img src={require('../metadata/kart/d47aa62de79d88ecee263e07456555d99ff8957f1760d0f248667913acbc2b67.png')} className="kart-img" alt="kart-img" onError={ e => {
                e.target.onError = null;
                e.target.src = '/kart.png';
            } }/>
            <p className="kart-name">{ kartName ? kartName.name : '알 수 없는 카트' }</p>
            <img src='../metadata/kart/d47aa62de79d88ecee263e07456555d99ff8957f1760d0f248667913acbc2b67.png' alt="??" />
        </div>
    )
}

function Search({ userName, matches }) {
    console.log( matches );
    return (
        <div className="container">
            <Header searchBtn={ true } />
            <div className="search-section1">
                <img src="/search_character.png" className="search-character" alt="searchCharacter" />
                <div className="userinfo">
                    <p className="search-title1">{ userName }님의</p>
                    <p className="search-title2">전적 검색 현황입니다.</p>
                </div>
                <div className="settings">
                    <button type="button" className="select-button1">개인전</button>
                    <button type="button" className="select-button2">팀전</button>
                    <select className="select-type">
                        <option value="fast">빠름</option>
                        <option value="fastest">매우 빠름</option>
                        <option value="booster">무한 부스터</option>
                    </select>
                </div>
            </div>
            <div className="search-section2">
                <div className="play-section" style={{marginRight: '15px'}}>
                    <p className="title">플레이 횟수</p>
                    <p className="sub-title">76전 22승 54패</p>
                    <div className="graph">
                        <div className="graph-border">
                            50%
                        </div>
                    </div>
                </div>
                <div className="play-section">
                    <p className="title">3위</p>
                    <p className="sub-title">빠른 평균 순위</p>
                    <div className="graph">
                        <div className="graph-border">
                            50%
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-section3">
                <div className="statistics">
                    <div className="sub-statistics" style={{ marginRight: '22.5px' }}>
                        <p className="sub-title">승률</p>
                        <div className="graph">
                            <div className="graph-border">
                                50%
                            </div>
                        </div>
                    </div>
                    <div className="sub-statistics" style={{ marginRight: '22.5px' }}>
                        <p className="sub-title">완주율</p>
                        <div className="graph">
                            <div className="graph-border">
                                50%
                            </div>
                        </div>
                    </div>
                    <div className="sub-statistics">
                        <p className="sub-title">리타이어율</p>
                        <div className="graph">
                            <div className="graph-border">
                                50%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-section4">
                {
                    matches.map( match => {
                        return <MatchList match={ match } />
                    })
                }
                <div className="match-list">
                    <div className="aside-color win"></div>
                    <div className="match-info">
                        <p className="date">4일전</p>
                        <p className="map">MAP</p>
                        <p className="win-or-lose">승리</p>
                        <p className="record">기록</p>
                    </div>
                    <div className="match-detail">
                        <p className="map">차이나 황산</p>
                        <p className="rank">#2/3</p>
                        <div className="div"></div>
                        <p className="record">1'35'12</p>
                    </div>
                    <div className="div1"></div>
                    <img src="/kart.png" className="kart-img" alt="kart-img" />
                    <p className="kart-name">흑기사X</p>
                </div>
                <div className="match-detail-list">
                    <img src="/1.png" className="rank-number" alt="kart-img" />
                    <div className="user-area">
                        <p className="user">Yongs</p>
                        <p className="user-record">1'31'333</p>
                    </div>
                    <img src="/kart.png" className="kart-img" alt="kart-img" />
                </div>
                <div className="match-detail-list">
                    <img src="/2.png" className="rank-number" alt="kart-img" />
                    <div className="user-area">
                        <p className="user">Yongs</p>
                        <p className="user-record">1'31'333</p>
                    </div>
                    <img src="/kart.png" className="kart-img" alt="kart-img" />
                </div>
                <div className="match-detail-list">
                    <img src="/3.png" className="rank-number" alt="kart-img" />
                    <div className="user-area">
                        <p className="user">Yongs</p>
                        <p className="user-record">1'31'333</p>
                    </div>
                    <img src="/kart.png" className="kart-img" alt="kart-img" />
                </div>
                <div className="match-detail-list">
                    <img src="/4.png" className="rank-number" alt="kart-img" />
                    <div className="user-area">
                        <p className="user">Yongs</p>
                        <p className="user-record">1'31'333</p>
                    </div>
                    <img src="/kart.png" className="kart-img" alt="kart-img" />
                </div>
                
                <div className="match-list">
                    <div className="aside-color win"></div>
                    <div className="match-info">
                        <p className="date">4일전</p>
                        <p className="map">MAP</p>
                        <p className="win-or-lose">승리</p>
                        <p className="record">기록</p>
                    </div>
                    <div className="match-detail">
                        <p className="map">차이나 황산</p>
                        <p className="rank">#2/3</p>
                        <div className="div"></div>
                        <p className="record">1'35'12</p>
                    </div>
                    <div className="div1"></div>
                    <img src="/kart.png" className="kart-img" alt="kart-img" />
                    <p className="kart-name">흑기사X</p>
                </div>
            </div>
        </div>
    );
}

export default Search;