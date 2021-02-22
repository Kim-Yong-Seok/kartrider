import React from 'react';
import '../css/index.css';
import Header from '../components/Header';

function Home() {
    return (
        <div className="container">
            <Header />
            <div className="home-section1">
                <div className="text-area">
                    <p class="openAPI-text">넥슨 오픈 API기반</p>
                    <p class="searchText">카트라이더 전적검색</p>
                </div>
                <img src="/home_character.png" className="home-character" alt="kartImage"></img>
            </div>
            <div className="home-section2">
                <input type="text" className="text-input" />
                <button type="button" className="searchBtn">검색</button>
            </div>
        </div>
    );
}

export default Home;