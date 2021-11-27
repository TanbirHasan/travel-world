import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import "./Login.css";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  FacebookAuthProvider,
} from "firebase/auth";
import { useContext, useState } from "react";
import { userContext } from "../../App";
import { useHistory, useLocation } from "react-router";

firebase.initializeApp(firebaseConfig);

function Login() {
  const [newUser, setnewUser] = useState(false);
  const [user, setuser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    succes: false,
  });
  const provider = new GoogleAuthProvider();
  const Fbprovider = new FacebookAuthProvider();

  const handlefacebooklogin = () => {
    const auth = getAuth();
    signInWithPopup(auth, Fbprovider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        console.log(user);

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  };

  const handlesignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
      const { displayName, photoURL, email } = result.user;
      const signedInuser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
      };
      setuser(signedInuser);
      console.log(displayName, photoURL, email);
    });
  };
  const handlesignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        const signoutuser = {
          isSignedIn: false,
          name: "",
          email: "",
          photo: "",
        };
        setuser(signoutuser);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const [loggedInuser, setloggedInuser] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handlesubmit = (e) => {
    if (newUser && user.email && user.password) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          const newUser = { ...user };
          newUser.error = " ";
          newUser.succes = true;
          setuser(newUser);
          console.log(res);
          updateUsername(user.name);
        })

        .catch((error) => {
          const newUser = { ...user };
          newUser.error = error.message;
          newUser.succes = false;
          setuser(newUser);

          // ..
        });
    }
    if (!newUser && user.email && user.password) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          const newUser = { ...user };
          newUser.error = " ";
          newUser.succes = true;
          setuser(newUser);
          setloggedInuser(newUser);
          history.replace(from);
          console.log("User info", res.user);
        })
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const newUser = { ...user };
          newUser.error = error.message;
          newUser.succes = false;
          setuser(newUser);
        });
    }
    e.preventDefault();
  };

  const handlechange = (e) => {
    let isFormvalid = true;
    if (e.target.name === "email") {
      isFormvalid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const passwordcheck = e.target.value.length > 6;
      const passwordnumber = /\d{1}/.test(e.target.value);
      isFormvalid = passwordcheck && passwordnumber;
    }
    if (isFormvalid) {
      const newUser = { ...user };
      newUser[e.target.name] = e.target.value;
      setuser(newUser);
    }
  };

  const updateUsername = (name) => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  return (
    <div className="login">
      <div className="container">
        {/* <h2>Our Own Authentication</h2>
        <h2>Name:{user.name}</h2>
        <h2>Email: {user.email}</h2>
        <h2>Password:{user.password}</h2> */}
        <form onSubmit={handlesubmit} className="form-control">
          {newUser && (
            <input
              type="name"
              name="name"
              onBlur={handlechange}
              placeholder="Enter Your Name:"
            />
          )}

          <br />
          <input
            type="text"
            placeholder="Enter Your Email :"
            name="email"
            onBlur={handlechange}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Enter Your Password :"
            name="password"
            onBlur={handlechange}
            required
          />
          <br />
          <div className="remember">
            <div className="row">
              <div className="col-md-6">
                <input type="checkbox" value="lsRememberMe" id="rememberMe" />{" "}
                <label for="rememberMe">Remember me</label>
              </div>
              <div className="col-md-6">
                <a href="#">Forgot Password?</a>
              </div>
            </div>
          </div>
          <input
            type="submit"
            id="submit"
            value={newUser ? "Sign Up" : "Sign In"}
          />

          <p>
            Don't have an account?<a href="/newusersignup">Create an account</a>
          </p>
        </form>
        <p style={{ color: "red" }}>{user.error}</p>
        {user.succes && (
          <p style={{ color: "green" }}>
            Account {newUser ? "created" : "Logged In"} Succesfully
          </p>
        )}
        {user.isSignedIn ? (
          <button onClick={handlesignOut}>Sign Out</button>
        ) : (
          <button onClick={handlesignIn}>Continue with Google</button>
        )}
        <br />
        <button onClick={handlefacebooklogin}>Continue with Facebook</button>
        {user.isSignedIn && (
          <div>
            <p>Welcome {user.name}</p>
            <p>Email : {user.email}</p>
            <img src={user.photo} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
