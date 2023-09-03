import React, { useState } from "react";
import logoImg from "/usher_nav.png";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper";
import { useSetRecoilState } from "recoil";
import axiosInstance from "../../api/axios";

export const JoinInput = () => {
  const navigate = useNavigate();
  const [isName, setisName] = useState("");
  const [isEmail, setisEmail] = useState("");
  const [isPw, setisPw] = useState("");
  const [isPwCheck, setisPwCheck] = useState("");
  const [isSent, setIsSent] = useState(false); // 이메일이 발송되었는지 여부

  const handleSubmit = (e) => {
    navigate("/success");
    e.preventDefault();
  };

  const handleEmailSend = async () => {
    try {
      const response = await axiosInstance.post("/dj-rest-auth/registration/", {
        username: isName,
        email: isEmail,
        password1: isPw,
        password2: isPwCheck,
      });
      console.log(response.data);
      setIsSent(true);
    } catch (error) {
      // 오류 처리
      console.error("이메일 확인 이메일 전송 중 오류 발생:", error);
      throw error;
    }
  };

  return (
    <Wrapper>
      <S.Bottomborder>
        <S.LeftFix>
          <img src={logoImg} alt="logo" />
        </S.LeftFix>
        <div>회원가입</div>
        <S.RightFix>
          <span className="material-symbols-outlined">close</span>
        </S.RightFix>
      </S.Bottomborder>
      <S.StepSection>
        Step 2. 회원 정보 입력
        <S.StepBtn3>1</S.StepBtn3>
        <S.StepBtn4>2</S.StepBtn4>
      </S.StepSection>
      <S.CommentSection>
        모든 <span>*필수 항목</span>을 입력해주세요.
      </S.CommentSection>
      <S.TxtInput>
        <p>
          이름<span>*필수 항목</span>
        </p>
        <input
          type="text"
          name="name"
          value={isName}
          onChange={(e) => setisName(e.target.value)}
          placeholder="이름을 입력해주세요"
          required
        />
      </S.TxtInput>
      <S.TxtInput>
        <p>
          이메일 인증<span>*필수 항목</span>
        </p>
        <input
          type="email"
          name="email"
          value={isEmail}
          onChange={(e) => setisEmail(e.target.value)}
          placeholder="예) usher@kopis.mail"
          required
        />
      </S.TxtInput>
      <S.TxtInput>
        <p>
          비밀번호<span>*필수 항목</span>
        </p>
        <input
          type="password"
          name="password"
          value={isPw}
          onChange={(e) => setisPw(e.target.value)}
          placeholder="영문/숫자/특수문자 조합 가능 (8자 이상)"
          required
        />
      </S.TxtInput>
      <S.TxtInput>
        <p>
          비밀번호 확인<span>*필수 항목</span>
        </p>
        <input
          type="password"
          name="passwordcheck"
          value={isPwCheck}
          onChange={(e) => setisPwCheck(e.target.value)}
          placeholder="비밀번호를 다시 한번 입력해주세요"
          required
        />
      </S.TxtInput>
      {isSent ? (
        <S.BottomBlueBtn onClick={handleSubmit}>가입 완료하기</S.BottomBlueBtn>
      ) : (
        <S.BottomBlueBtn onClick={handleEmailSend}>
          인증번호 발송
        </S.BottomBlueBtn>
      )}
    </Wrapper>
  );
};
