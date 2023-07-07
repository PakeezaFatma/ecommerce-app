import React, { useContext, useState } from "react";

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { ContextAPI } from "../../Store/ContextAPI";

const Login = () => {
  const ctx=useContext(ContextAPI)
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setconfirmPwd] = useState("");
  const [login, setLogin] = useState(true);

  const emailHandler = (e) => {
    setEmail(e.target.value)
  };
  const pswHandler = (e) => {
    setPassword(e.target.value);
  };
  const confirmPwdHandler = (e) => {
    setconfirmPwd(e.target.value);
  };
  const switchHandler = (e) => {
    setLogin(!login);
  };
  let url;
  const auth = async () => {
    // if (confirmPwd !== password) {
    //   return alert("Password and Confirm Password is different");
    // }
    if (login) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDs-VSDlngvQJKL0oshYK5r4pM_rSD7zqE";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDs-VSDlngvQJKL0oshYK5r4pM_rSD7zqE";
    }
    // try {
    //   const response = await fetch(url, {
    //     method: "Post",
    //     body: JSON.stringify({
    //       email: email,
    //       password: password,
    //       returnSecureToken: true,
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    // } catch (err) {}
    fetch(url,{
      method:"POST",
      body:JSON.stringify({
        email:email,
        password:password,
        returnSecureToken:true,
      }),
      headers:{
        "Content-Type" : "application/json"
      }
    }).then((res)=>{
      const data=res.json();
      data.then((resData)=>{
        if(resData.error){
          return alert(resData.error.message)
        }
        console.log(resData)
        console.log(resData.idToken);
        ctx.setToken(true);
        localStorage.setItem("token",resData.idToken);
        navigate('/')
      })
    }).catch((e)=>alert(e.error.message))
  };
  return (
    <div>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBInput
          wrapperClass="mb-4"
          label="Email address"
          id="from1"
          type="email"
          onChange={emailHandler}
          value={email}
        />
        <MDBInput
          wrapperClass="mb-4"
          label="password"
          id="from2"
          type="password"
          onChange={pswHandler}
          value={password}
        />
        {  !login && 
          <MDBInput
          wrapperClass="mb-4"
          label="Confirm password"
          id="from3"
          type="password"
          onChange={confirmPwdHandler}
          value={confirmPwd}
        />
        }
        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Remember me"
          />
          <a href="!#">Forgot password</a>
        </div>

        <MDBBtn className="mb-4" onClick={auth}>{login ? "Sign in" :"Register"}</MDBBtn>
        <div className="text-center" >
          {/* <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p> */}
          
          <div onClick={switchHandler} style={{cursor:"pointer"}}>
<p>{login ? "Register" : "Already have account go to sign in"}</p>
  </div>


          <div
            className="d-flex justify-content-between mx-auto"
            style={{ width: "40%" }}
          >
            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="facebook-f" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="twitter" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="google" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="github" size="sm" />
            </MDBBtn>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
};

export default Login;
