import React from "react";
import "./Name.scss";

export default function Name({ step, setStep, user, setUser }) {
  return (
    <div className="lg-container name">
      <h1>Choisissez votre nom</h1>
      <input
        maxLength={30}
        type="text"
        placeholder="ex : Flopignata"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      {user.name && (
        <button className="next" onClick={() => setStep(step + 1)}>
          Suivant
        </button>
      )}
    </div>
  );
}
