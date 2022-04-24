import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.png" />
        <SignUP>GET ALL THERE!</SignUP>
        <Description>
          Get Premier Access arrived on the House of Mouse's very own streaming
          platform back in September 2020. It allowed those eager to watch the
          latest cinematic release from Walt Disney Studios from the comfort of
          their own home during the ongoing pandemic at a premium.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;
const Container = styled.div`
  position: relatives;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 48px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CTALogoOne = styled.img`
  width: 100%;
  height: 100%;
`;
const SignUP = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 16px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  letter-spacing: 1.5px;
  transition: all 250ms;
  margin-top: 8px;
  margin-bottom: 12px;
  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 12px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
const CTALogoTwo = styled(CTALogoOne)``;
