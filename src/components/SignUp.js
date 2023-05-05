import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getUser } from "../utils/auth-utils";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const user = getUser();
    if (user) {
      console.log("user", user);
      navigate("/");
    }
  }, [navigate]);
  const onNameChanged = (e) => setName(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);
  const onEmailChanged = (e) => setEmail(e.target.value);
  const signUpSubmit = async (event) => {
    // console.log(name, email, password);
    event.preventDefault();
    const data = await fetch("http://localhost:5000/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    if (data) {
      console.log("data=====>", data);
      data.json().then((a) => {
        localStorage.setItem(
          "user",
          JSON.stringify({ name: a.name, email: a.email })
        );
      });
      console.log("before navigate");
      navigate("/");
    }
  };
  return (
    <div>
      <FormContainer action="">
        <h1 className="text-center text-3xl font-bold text-indigo-700">
          Register
        </h1>
        <div>
          <label className="block mb-2 text-indigo-500" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
            type="text"
            name="name"
            value={name}
            onChange={onNameChanged}
          />
        </div>
        <div>
          <label className="block mb-2 text-indigo-500" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
            type="email"
            name="email"
            value={email}
            onChange={onEmailChanged}
          />
        </div>
        <div>
          <label className="block mb-2 text-indigo-500" htmlFor="password">
            Password
          </label>
          <input
            className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
            type="password"
            name="password"
            value={password}
            onChange={onPasswordChanged}
          />
        </div>
        <div>
          <button
            className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
            type="submit"
            onClick={signUpSubmit}
          >
            Sign up
          </button>
        </div>
      </FormContainer>
    </div>
  );
};

export default SignUp;
const FormContainer = styled.form`
  width: 50%;
  position: absolute;
  left: 20%;
  top: 20%;
`;
