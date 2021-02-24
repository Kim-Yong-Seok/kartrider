import React from 'react';
import '../css/index.css';
import Header from '../components/Header';

function Home() {
    return (
        <div className="container">
            <Header />
            <div className="home-section1">
                <div className="text-area">
                    <p className="openAPI-text">넥슨 오픈 API기반</p>
                    <p className="searchText">카트라이더 전적검색</p>
                </div>
                <img src="/home_character.png" className="home-character" alt="kartImage"></img>
            </div>
            <div className="home-section2">
                <input type="text" className="text-input" placeholder="카트라이더 닉네임 입력" />
                <button type="button" className="searchBtn">검색</button>
            </div>
            <div className="home-section3">
                <p className="kart-board-title">카트 랭킹 TOP5</p>
                <hr className="title-hr" />
                <div className="board-item-area">
                    <div className="board-item">
                        <img src="/1.png" className="rank-img" alt="rank" />
                        <span className="kart-body">카트라넥X</span>
                        <img src="/kartranek.png" className="kart-img" alt="kart body" />
                    </div>
                    <div className="board-item">
                        <img src="/2.png" className="rank-img" alt="rank" />
                        <span className="kart-body">카트라넥X</span>
                        <img src="/kartranek.png" className="kart-img" alt="kart body" />
                    </div>
                    <div className="board-item">
                        <img src="/3.png" className="rank-img" alt="rank" />
                        <span className="kart-body">카트라넥X</span>
                        <img src="/kartranek.png" className="kart-img" alt="kart body" />
                    </div>
                    <div className="board-item">
                        <img src="/4.png" className="rank-img" alt="rank" />
                        <span className="kart-body">카트라넥X</span>
                        <img src="/kartranek.png" className="kart-img" alt="kart body" />
                    </div>
                    <div className="board-item">
                        <img src="/5.png" className="rank-img" alt="rank" />
                        <span className="kart-body">카트라넥X</span>
                        <img src="/kartranek.png" className="kart-img" alt="kart body" />
                    </div>
                </div>
            </div>
            <div className="home-section4">
                <p className="kart-board-title">게시판 인기 글</p>
                <hr className="title-hr" />
                <div className="board-item-area">
                    <div className="board-item">
                        <p className="board-item-p">게시 글</p>
                    </div>
                    <div className="board-item">
                        <p className="board-item-p">게시 글</p>
                    </div>
                    <div className="board-item">
                        <p className="board-item-p">게시 글</p>
                    </div>
                </div>
                <div className="board-bottom-area">
                    <p className="more">더 보기</p>
                </div>
           </div>
           <div className="home-section4">
                <p className="kart-board-title">공지 사항</p>
                <hr className="title-hr" />
                <div className="board-item-area">
                    <div className="board-item">
                        <p className="board-item-p">게시 글</p>
                    </div>
                    <div className="board-item">
                        <p className="board-item-p">게시 글</p>
                    </div>
                    <div className="board-item">
                        <p className="board-item-p">게시 글</p>
                    </div>
                </div>
                <div className="board-bottom-area">
                    <p className="more">더 보기</p>
                </div>
           </div>
        </div>
    );
}
export default Home;