import logo from "./images/icons/logo.svg";
import "./App.scss";
import Slide from "./components/slide/Slide";
import Score from "./components/score/Score";
import Avatar from "./components/avatar/Avatar";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name : null,
    avatar : null,
    country : null,
    flag : null,
    score : 13.7
  });

  const questions = [
    {
      question : "",
      responses : [
        {
          response : {
            text : "",
            score : 0
          }
        }
      ]
    },
  ]

  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="infos">
        <Score />
        <Avatar />
      </div>
      <Slide />
    </div>
  );
}

export default App;
