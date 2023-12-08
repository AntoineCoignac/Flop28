import React from 'react'
import "./End.scss"

export default function End({score, user, theme}) {
  console.log(theme);
  const handleClick = () => {
    window.location.href = "https://keskonfehencorla.alwaysdata.net/classement.php";
  }

  const handleChrist = () => {
    window.location.href = "https://keskonfehencorla.alwaysdata.net/noel.html";
  }

  fetch('https://keskonfehencorla.alwaysdata.net/submit.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
  },
  body: JSON.stringify({
    id2 : user.id.toString(),
    username : user.name.toString(),
    pays : user.country.toString(),
    flag : user.flag,
    avatar : user.avatar,
    score : user.score  
  }) 
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 
  })
  .catch(error => {
    console.error('Erreur lors de la requête :', error);
  });

  return (
    <div className="lg-container end">
        <p>En 2100, il fera donc</p>
        <h1>{score.toFixed(1)}°C</h1>
        <button onClick={()=>handleClick()}>Voir mon classement</button>
        {
          theme == "christmas" && <button onClick={()=>handleChrist()}>Fêter Noël !</button>
        }
    </div>
  )
}
