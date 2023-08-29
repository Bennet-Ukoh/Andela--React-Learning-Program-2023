import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-top: 50px;
`;

const Title = styled.h1`
  white-space: pre-line;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid black;
`;

const Label = styled.label`
  margin-top: 20px;
  font-size: 24px;
`;

const EmailInput = styled.input`
  height: 40px;
  font-size: 24px;
`;

const PasswordInput = styled.input`
  height: 40px;
  font-size: 24px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;

const CheckboxLabel = styled(Label)`
  margin-top: 7px;
  margin-left: 10px;
`;

const RememberMeCheckbox = styled.input`
  margin-top: 10px;
`;

const SubmitButton = styled.input`
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #666666;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 40px;
`;

const ErrorLabel = styled.div`
  font-size: 26px;
  color: red;
`;

const SignInVanila = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  function handleEmailInputChange(e) {
    e.preventDefault();
    setEmail(e.target.value);
    setEmailError("");
  }

  function handlePasswordInputChange(e) {
    e.preventDefault();
    setPassword(e.target.value);
    setPasswordError("");
  }

  function handleRememberMeInputChange(e) {
    setRememberMe(e.target.checked);
  }

  function handleSubmit(e) {
    var emailError = "";
    var passwordError = "";

    if (!email) {
      emailError = "Email can't be empty";
    }

    if (!password) {
      passwordError = "Password can't be empty";
    } else if (password.length < 8) {
      passwordError = "Password should be at least 8 characters";
    }

    if (emailError || passwordError) {
      setEmailError(emailError);
      setPasswordError(passwordError);
      e.preventDefault();
    } else {
      const data = { email: email, password: password, rememberMe: rememberMe };
      alert(JSON.stringify(data));
    }
  }

  return (
    <Container>
      <ContentContainer>
        <Title>{"Sign In"}</Title>

        <Form onSubmit={handleSubmit}>
          <Label>Email</Label>
          <EmailInput
            type="email"
            value={email}
            onChange={handleEmailInputChange}
          />

          {emailError && <ErrorLabel>{emailError}</ErrorLabel>}

          <Label>Password</Label>
          <PasswordInput
            type="password"
            value={password}
            onChange={handlePasswordInputChange}
          />

          {passwordError && <ErrorLabel>{passwordError}</ErrorLabel>}

          <CheckboxContainer>
            <RememberMeCheckbox
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeInputChange}
            />
            <CheckboxLabel>Remember me</CheckboxLabel>
          </CheckboxContainer>

          <SubmitButton type="submit" />
        </Form>
      </ContentContainer>
    </Container>
  );
};

export default SignInVanila;
