import React from "react";
import "./Country.scss";

export default function Country({ step, setStep, user, setUser }) {
  return (
    <div className="lg-container country">
      <h1>Choisissez le nom de votre pays</h1>
      <input
        maxLength={30}
        type="text"
        placeholder="ex : Flopéi"
        onChange={(e) => setUser({ ...user, country: e.target.value })}
      />
      {user.name && (
        <button className="next" onClick={() => setStep(step + 1)}>
          Suivant
        </button>
      )}
    </div>
  );
}
