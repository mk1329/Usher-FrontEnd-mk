import React from 'react'
import { Nav } from '../../../components/layouts/nav/Nav';
import { HomeNav } from '../../../components/layouts/homeNav/HomeNav';
import Wrapper from "../../../components/Wrapper";
import * as S from "./style";
import { useRecoilValue } from "recoil";
import { accessTokenState } from '../../../recoil/recoilState';
import { useNavigate } from 'react-router-dom';
import { MyProfile } from '../../../components/my/myMain/MyProfile';
import { MyTicket } from '../../../components/my/myMain/MyTicket';
import { UseUsher } from '../../../components/my/myMain/UseUsher';
import { AskUsher } from '../../../components/my/myMain/AskUsher';
import { LogOut } from '../../../components/my/myMain/LogOut';
import { Delete } from '../../../components/my/myMain/Delete';
import { Footer } from '../../../components/layouts/footer/Footer';

export const My = () => {
  const navigate = useNavigate();
  // Recoil 상태에서 Access Token을 가져옵니다.
  const accessToken = useRecoilValue(accessTokenState);

    // Access Token이 있는지 확인
  if (true) {
    // 서비스에 접근 가능한 코드를 실행합니다.
    return (
      <Wrapper>
        <Nav />
        <HomeNav />
        <MyProfile />
        <MyTicket />
        <UseUsher />
        <AskUsher />
        <LogOut />
        <Delete />
        <Footer />
      </Wrapper>
    );
  } else {
    // Access Token이 없으면 로그인 페이지로 리다이렉트 또는 다른 작업을 수행합니다.
    return (
      <div>
        <h1>로그인이 필요합니다.</h1>
        <div onClick={() => navigate("/login")} style={{background: "red"}}>로그인 하러가기</div>
      </div>
    );
  }
};