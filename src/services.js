import { auth } from "./firebase";

const loginService = (email, password) => {
  let succ = false;
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("login successfull");
      succ = true;
      return true;
    })
    .catch((error) => {
      alert(error.message);
      return false;
    });

  return succ;
};

const signup = (email, password, username) => {
  console.log(email, password);
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      return authUser.user.updateProfile({
        displayName: username,
      });
    })
    .catch((error) => {
      alert(error.message);
      return false;
    });
};

const authenticate = auth.onAuthStateChanged((authuser) => {
  if (authuser) {
    // user has logged in...
    console.log("authuser found", authuser);
    return authuser;
  } else {
    // user has logged out
    console.log("no authuser", authuser);
    return null;
  }
});

export { loginService, authenticate, signup };
