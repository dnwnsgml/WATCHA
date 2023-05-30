import React from 'react';
import './App.css';
import { Link, Route } from "react-router-dom";
import Home from './components/home';
import New from './components/new';
import Top from './components/top';
import Notnetple from './components/notnetple';
import Webtoon from './components/webtoon';
import Movie from './components/movie';
import Search from './components/search';

function App() {
  return (
    <>
      <div className='header'>
        <div className='header_top'>
          <div className='logo'>
            <Link to="/">
              <img src='https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd05ded51-54bf-4174-8b7e-e021c6eb6b5a%2FWATCHA_LOGO.svg&blockId=400d70c6-5698-4877-9ddf-83be123fb341' alt='' />
            </Link>
          </div>
          <div className='login'>
            <a href='#'></a>
          </div>
        </div>
        <div className='header_bot'>
          <div className='nav'>
            <ul>
              <li>
                <Link to="/">
                  홈
                </Link>
              </li>
              <li>
                <Link to="/components/new">
                  NEW
                </Link>
              </li>
              <li>
                <Link to="/components/top">
                  왓챠 최고 인기작
                </Link>
              </li>
              <li>
                <Link to="/components/notnetple">
                  N플엔 없어요
                </Link>
              </li>
              <li>
                <Link to="/components/webtoon">
                  웹툰
                </Link>
              </li>
              <li>
                <Link to="/components/movie">
                  왓챠 개봉관
                </Link>
              </li>
              <li>
                <Link to="/components/search">
                  찾기
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/components/new" component={New}></Route>
        <Route path="/components/top" component={Top}></Route>
        <Route path="/components/notnetple" component={Notnetple}></Route>
        <Route path="/components/webtoon" component={Webtoon}></Route>
        <Route path="/components/movie" component={Movie}></Route>
        <Route path="/components/search" component={Search}></Route>
      </div>
      <div className='footer'>
        <div className='footer_in'>
          <div className='adress'>
            <ul>
              <li>주식회사왓챠｜대표 박태훈｜서울특별시 서초구 강남대로 343 신덕빌딩 3층</li>
              <li>사업자등록번호 211-88-66013｜통신판매업 신고번호 제 2019-서울서초-0965호</li>
              <li>호스팅 서비스 제공자 아마존웹서비시즈코리아 유한회사</li>
              <li>WATCHA Copyright © 2023 by Watcha, Inc. All rights reserved.</li>
            </ul>
          </div>
          <div className='custom'>
            <ul>
              <li>왓챠피디아 서비스 이용약관 </li>
              <li>개인정보 처리 방침</li>
              <li>왓챠 서비스 이용약관</li>
              <li>고객센터</li>
              <li>채용정보</li>
            </ul>
          </div>
          <div className='custom_bot'>
            <ul>
              <li><span className='cus1'>고객센터(이용 및 결제 문의)</span><span>cs@watcha.co.kr / 02-515-9985 (유료)</span></li>
              <li><span className='cus2'>제휴 및 대외 협력</span><span>https://watcha.team/contact</span></li>
              <li><span className='cus3'>B2B 이용권 구매 문의</span><span>쿠프마케팅 (jinu1005@coopnc.com / 070-4020-5289)</span></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
