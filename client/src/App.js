import logo from "./images/icons/logo.svg";
import "./App.scss";
import Slide from "./components/slide/Slide";
import Score from "./components/score/Score";
import Avatar from "./components/avatar/Avatar";
import { useState } from "react";
import questions from "./assets/questions.json";

function App() {
  const [user, setUser] = useState({
    name : null,
    avatar : null,
    country : null,
    flag : null,
    score : 13.7
  });

  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="infos">
        <Score score={user.score}/>
        <Avatar />
      </div>
      <Slide item={questions[0]} />
    </div>
  );
}

export default App;
