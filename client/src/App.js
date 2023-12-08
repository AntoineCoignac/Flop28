import logo from "./images/icons/logo.svg";
import "./App.scss";
import Slide from "./components/slide/Slide";
import Score from "./components/score/Score";
import Avatar from "./components/avatar/Avatar";
import { useEffect, useState } from "react";
import questions from "./assets/questions.json";
import Context from "./components/context/Context";
import Name from "./components/name/Name";
import AvatarChoice from "./components/avatarchoice/AvatarChoice";
import Country from "./components/country/Country";
import Flag from "./components/flag/Flag";
import End from "./components/end/End";

function App() {
  const generateUniqueId = () => {
    const timestamp = new Date().getTime(); // Obtient le timestamp actuel
    const uniqueId = `id_${timestamp}`; // Concatène avec un préfixe pour créer l'identifiant unique
    return uniqueId;
  };

  const [user, setUser] = useState({
    id: generateUniqueId(),
    name: null,
    avatar: null,
    country: null,
    flag: null,
    score: 13.7,
  });

  const [step, setStep] = useState(0);
  const [theme, setTheme] = useState("Classic");

  const toDisplay = () => {
    switch (step) {
      case 0:
        return (
          <Context
            text={
              "Bienvenue sur FLOP28, vous allez incarner un chef d’état 👨‍💼. Votre objectif est de faire les bons choix pour que le climat se porte au mieux dans les prochaines années."
            }
            step={step}
            setStep={setStep}
          />
        ); //contexte
      case 1:
        return (
          <Name step={step} setStep={setStep} user={user} setUser={setUser} />
        ); //name
      case 2:
        return (
          <AvatarChoice
            step={step}
            setStep={setStep}
            user={user}
            setUser={setUser}
          />
        ); //avatar
      case 3:
        return (
          <Country
            step={step}
            setStep={setStep}
            user={user}
            setUser={setUser}
          />
        ); //nom pays
      case 4:
        return (
          <Flag step={step} setStep={setStep} user={user} setUser={setUser} />
        ); //drapeau
      case questions.length + 4:
        return <End score={user.score} user={user} theme={theme} />; //Fin
      default:
        return (
          <Slide
            item={questions[step - 4]}
            step={step}
            setStep={setStep}
            user={user}
            setUser={setUser}
          />
        ); //Slide
    }
  };

  useEffect(() => {
    const themeClassic = () => {
      document.documentElement.style.setProperty("--font", '"Satoshi"');
      document.documentElement.style.setProperty("--big", "28px");
      document.documentElement.style.setProperty("--mid", "20px");
      document.documentElement.style.setProperty("--lit", "16px");
      document.documentElement.style.setProperty("--text-color1", "#07312F");
      document.documentElement.style.setProperty("--text-color2", "#9EB3B1");
      document.documentElement.style.setProperty("--color1", "#157067");
      document.documentElement.style.setProperty("--color2", "#F2F9F9");
      document.documentElement.style.setProperty("--color3", "#07312F");
      document.documentElement.style.setProperty("--bg", "#fff");
      document.documentElement.style.setProperty("--big-radius", "32px");
      document.documentElement.style.setProperty("--mid-radius", "24px");
      document.documentElement.style.setProperty("--lit-radius", "12px");
      document.documentElement.style.setProperty("--weight", "500");
      document.documentElement.style.setProperty("--big-padding", "64px");
      document.documentElement.style.setProperty("--mid-padding", "32px");
      document.documentElement.style.setProperty("--lit-padding", "16px");
      document.documentElement.style.setProperty("--lg-container", "1200px");
      document.documentElement.style.setProperty("--container", "600px");
      document.documentElement.style.setProperty("--big-margin", "32px");
      document.documentElement.style.setProperty("--mid-margin", "24px");
      document.documentElement.style.setProperty("--lit-margin", "16px");
      document.documentElement.style.setProperty("--absolute", "64px");
      document.documentElement.style.setProperty(
        "--max-width",
        "calc(100% - 512px)"
      );
      document.documentElement.style.setProperty("--opacity", "0.8");
    };

    const themeChristmas = () => {
      setTheme("christmas");
      document.documentElement.style.setProperty("--font", '"Christmas"');
      document.documentElement.style.setProperty("--big", "32px");
      document.documentElement.style.setProperty("--mid", "24px");
      document.documentElement.style.setProperty("--lit", "18px");
      document.documentElement.style.setProperty("--text-color1", "#4B0404");
      document.documentElement.style.setProperty("--text-color2", "#B39E9E");
      document.documentElement.style.setProperty("--color1", "#EE1414");
      document.documentElement.style.setProperty("--color2", "#F9F2F2");
      document.documentElement.style.setProperty("--color3", "#4B0404");
      document.documentElement.style.setProperty("--bg", "url('./image/christmas.svg')");
      document.documentElement.style.setProperty("--big-radius", "32px");
      document.documentElement.style.setProperty("--mid-radius", "24px");
      document.documentElement.style.setProperty("--lit-radius", "12px");
      document.documentElement.style.setProperty("--weight", "500");
      document.documentElement.style.setProperty("--big-padding", "64px");
      document.documentElement.style.setProperty("--mid-padding", "32px");
      document.documentElement.style.setProperty("--lit-padding", "16px");
      document.documentElement.style.setProperty("--lg-container", "1200px");
      document.documentElement.style.setProperty("--container", "600px");
      document.documentElement.style.setProperty("--big-margin", "32px");
      document.documentElement.style.setProperty("--mid-margin", "24px");
      document.documentElement.style.setProperty("--lit-margin", "16px");
      document.documentElement.style.setProperty("--absolute", "64px");
      document.documentElement.style.setProperty(
        "--max-width",
        "calc(100% - 512px)"
      );
      document.documentElement.style.setProperty("--opacity", "1");
    };

    const themeListenbourg = () => {
      document.documentElement.style.setProperty("--font", '"Listenbourg"');
      document.documentElement.style.setProperty("--big", "28px");
      document.documentElement.style.setProperty("--mid", "20px");
      document.documentElement.style.setProperty("--lit", "16px");
      document.documentElement.style.setProperty("--text-color1", "#402108");
      document.documentElement.style.setProperty("--text-color2", "#B3AC9E");
      document.documentElement.style.setProperty("--color1", "#FE0000");
      document.documentElement.style.setProperty("--color2", "#FAF4CB");
      document.documentElement.style.setProperty("--color3", "#C98716");
      document.documentElement.style.setProperty("--bg", "#fff");
      document.documentElement.style.setProperty("--big-radius", "0");
      document.documentElement.style.setProperty("--mid-radius", "0");
      document.documentElement.style.setProperty("--lit-radius", "0");
      document.documentElement.style.setProperty("--weight", "500");
      document.documentElement.style.setProperty("--big-padding", "64px");
      document.documentElement.style.setProperty("--mid-padding", "32px");
      document.documentElement.style.setProperty("--lit-padding", "16px");
      document.documentElement.style.setProperty("--lg-container", "1200px");
      document.documentElement.style.setProperty("--container", "600px");
      document.documentElement.style.setProperty("--big-margin", "32px");
      document.documentElement.style.setProperty("--mid-margin", "24px");
      document.documentElement.style.setProperty("--lit-margin", "16px");
      document.documentElement.style.setProperty("--absolute", "64px");
      document.documentElement.style.setProperty(
        "--max-width",
        "calc(100% - 512px)"
      );
      document.documentElement.style.setProperty("--opacity", "1");
    };

    const themeCauchemard = () => {
      document.documentElement.style.setProperty("--font", '"Cauchemard"');
      document.documentElement.style.setProperty("--big", "28px");
      document.documentElement.style.setProperty("--mid", "20px");
      document.documentElement.style.setProperty("--lit", "16px");
      document.documentElement.style.setProperty("--text-color1", "#FF00D6");
      document.documentElement.style.setProperty("--text-color2", "#24FF00");
      document.documentElement.style.setProperty("--color1", "#24FF00");
      document.documentElement.style.setProperty("--color2", "#524C2E");
      document.documentElement.style.setProperty("--color3", "#000AFF");
      document.documentElement.style.setProperty("--bg", "linear-gradient(53deg, rgba(255,0,0,0) 0%, rgba(3,0,255,0) 9%, rgba(0,255,8,0) 12%, rgba(0,255,102,1) 14%, rgba(0,255,243,0) 17%, rgba(171,90,56,0.503448275862069) 19%, rgba(241,255,0,0) 20%, rgba(255,0,0,0.503448275862069) 26%, rgba(202,15,54,1) 29%, rgba(131,34,126,1) 33%, rgba(239,0,255,0.503448275862069) 42%, rgba(248,0,255,0) 44%, rgba(0,237,255,0.503448275862069) 49%, rgba(2,242,179,1) 52%, rgba(4,251,51,1) 57%, rgba(5,253,26,1) 58%, rgba(5,255,0,0.503448275862069) 59%, rgba(66,173,91,1) 64%, rgba(115,107,163,0.503448275862069) 68%, rgba(97,99,131,1) 70%, rgba(51,79,52,0.503448275862069) 75%, rgba(246,128,0,1) 85%, rgba(237,255,0,0.503448275862069) 88%, rgba(140,194,227,0.503448275862069) 94%, rgba(255,0,0,0.503448275862069) 99%, rgba(149,95,255,1) 100%)");
      document.documentElement.style.setProperty("--big-radius", "1px");
      document.documentElement.style.setProperty("--mid-radius", "4px");
      document.documentElement.style.setProperty("--lit-radius", "50px");
      document.documentElement.style.setProperty("--weight", "500");
      document.documentElement.style.setProperty("--big-padding", "64px");
      document.documentElement.style.setProperty("--mid-padding", "32px");
      document.documentElement.style.setProperty("--lit-padding", "16px");
      document.documentElement.style.setProperty("--lg-container", "1200px");
      document.documentElement.style.setProperty("--container", "600px");
      document.documentElement.style.setProperty("--big-margin", "32px");
      document.documentElement.style.setProperty("--mid-margin", "24px");
      document.documentElement.style.setProperty("--lit-margin", "16px");
      document.documentElement.style.setProperty("--absolute", "64px");
      document.documentElement.style.setProperty(
        "--max-width",
        "calc(100% - 512px)"
      );
      document.documentElement.style.setProperty("--opacity", "0.4");
    };

    if (user.flag) {
      switch (user.flag) {
        case 0:
          themeClassic();
          break;
        case 1:
          themeChristmas();
          break;
        case 2:
          themeListenbourg();
          break;
        case 3:
          themeCauchemard();
          break;
        default:
          break;
      }
    }
  }, [user]);

  return (
    <div className="App">
      <div className="logo">
        <svg className="icon"
          width="128"
          height="56"
          viewBox="0 0 128 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 55.4076V0.499146H21.9724V11.2002H11.0481V19.9358H21.4111V30.5117H11.0481V55.4076H0Z"
            fill="#07312F"
          />
          <path
            d="M25.4995 55.4081V0.499695H36.4863V46.0489H47.7838V55.4081H25.4995Z"
            fill="#07312F"
          />
          <path
            d="M64.0199 55.9078C59.6221 55.9078 56.2726 54.5813 53.9459 51.9297C51.6319 49.278 50.4685 45.4457 50.4685 40.4338V14.352C50.4685 9.65059 51.6191 6.08399 53.9203 3.64961C56.2214 1.2165 59.5837 0 64.0199 0C68.4433 0 71.8183 1.2165 74.1067 3.64961C76.4079 6.08399 77.5584 9.65059 77.5584 14.352V40.4338C77.5584 45.4457 76.3951 49.278 74.0811 51.9297C71.7672 54.5813 68.4049 55.9078 64.0199 55.9078ZM64.1093 45.7996C65.7713 45.7996 66.6023 44.1882 66.6023 40.9641V14.1641C66.6023 11.4601 65.7969 10.1081 64.1733 10.1081C62.3451 10.1081 61.4246 11.4921 61.4246 14.2574V41.0267C61.4246 42.7314 61.6292 43.9531 62.0511 44.6917C62.4602 45.4303 63.1505 45.7996 64.1093 45.7996Z"
            fill="#07312F"
          />
          <path
            d="M81.9945 55.4081V0.499695H96.5046C99.5473 0.499695 101.951 1.17567 103.728 2.52768C105.518 3.87969 106.783 5.80291 107.55 8.29863C108.33 10.7944 108.714 13.7693 108.714 17.2222C108.714 20.5498 108.394 23.4455 107.742 25.9106C107.103 28.3757 105.952 30.2835 104.29 31.6355C102.641 32.9875 100.289 33.6635 97.259 33.6635H92.7973V55.4081H81.9945ZM92.7973 23.8046H93.4109C95.4564 23.8046 96.7092 23.2321 97.1566 22.0884C97.6169 20.9447 97.8471 19.2604 97.8471 17.0343C97.8471 14.9552 97.6297 13.3476 97.1822 12.2141C96.7348 11.0806 95.6737 10.5145 94.0118 10.5145H92.7973V23.8046Z"
            fill="#07312F"
          />
          <path
            d="M121.21 55.6863C118.797 55.6863 117.072 54.9943 116.036 53.6109C115 52.2275 114.485 50.2695 114.485 47.7362V46.0259C114.485 44.7204 114.641 43.6632 114.952 42.8551C115.263 42.0464 115.838 41.4274 116.677 40.9988C115.892 40.6773 115.329 40.1392 115 39.3837C114.665 38.6289 114.503 37.6909 114.503 36.5703V35.898C114.503 33.6185 115.072 31.9598 116.222 30.9218C117.365 29.8844 119.03 29.3654 121.21 29.3654C123.456 29.3654 125.127 29.8987 126.241 30.9661C127.354 32.0328 127.905 33.7448 127.905 36.1027C127.905 37.3401 127.762 38.3781 127.468 39.2155C127.175 40.0536 126.594 40.6576 125.732 41.0281C126.654 41.5052 127.253 42.1314 127.528 42.906C127.798 43.6806 127.935 44.7204 127.935 46.0259V47.7362C127.935 50.2695 127.42 52.2275 126.39 53.6109C125.354 54.9943 123.63 55.6863 121.21 55.6863ZM121.21 38.836C122.12 38.836 122.57 38.0171 122.57 36.3805C122.57 35.8352 122.474 35.3185 122.288 34.8313C122.096 34.344 121.737 34.1004 121.21 34.1004C120.683 34.1004 120.324 34.344 120.138 34.8313C119.947 35.3185 119.851 35.8352 119.851 36.3805C119.851 38.0171 120.306 38.836 121.21 38.836ZM121.21 50.6005C122.15 50.6005 122.617 49.8457 122.617 48.3354V45.9823C122.617 45.2029 122.51 44.5941 122.3 44.1553C122.09 43.7171 121.731 43.498 121.21 43.498C120.677 43.498 120.312 43.7171 120.114 44.1553C119.923 44.5941 119.821 45.2029 119.821 45.9823V48.3354C119.821 49.8457 120.288 50.6005 121.21 50.6005Z"
            fill="#07312F"
          />
          <path
            d="M114.478 25.8242V24.597C114.478 23.3202 114.675 22.1733 115.07 21.155C115.466 20.1368 115.975 19.1916 116.598 18.32C117.22 17.4478 117.879 16.593 118.574 15.7549C119.245 14.9366 119.885 14.0962 120.496 13.2342C121.101 12.3716 121.604 11.4366 121.987 10.4279C122.371 9.41984 122.562 8.28665 122.562 7.03016C122.562 6.42616 122.472 5.90718 122.293 5.47379C122.113 5.03979 121.742 4.82307 121.173 4.82307C120.317 4.82307 119.891 5.5881 119.891 7.11756V10.2597H114.478C114.472 10.0358 114.46 9.7826 114.442 9.50006C114.43 9.21751 114.418 8.94454 114.418 8.68175C114.418 6.83025 114.615 5.25947 115.005 3.96827C115.394 2.67766 116.083 1.69354 117.071 1.01591C118.065 0.338878 119.454 0.000671387 121.245 0.000671387C123.383 0.000671387 125.042 0.599877 126.227 1.7983C127.413 2.99672 128 4.70637 128 6.92782C128 8.43812 127.808 9.76045 127.419 10.8954C127.03 12.031 126.509 13.0636 125.868 13.9938C125.227 14.9247 124.521 15.8525 123.748 16.778C123.203 17.431 122.676 18.0979 122.161 18.7803C121.652 19.4622 121.197 20.1931 120.808 20.9724H127.826V25.8242H114.478Z"
            fill="#07312F"
          />
        </svg>
      </div>
      {step > 4 && step !== questions.length + 4 && (
        <div className="infos">
          <Score score={user.score} />
          <Avatar id={user.avatar} />
        </div>
      )}
      {toDisplay()}
    </div>
  );
}

export default App;
