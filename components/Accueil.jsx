import style from "../styles/Accueil.module.scss";
import { BsArrowDown } from "react-icons/bs";
import { IconContext } from "react-icons";

const Accueil = () => {
  return (
    <>
      <div class={style.container}>
        <article class={style.content}>
          <h1 class="title">
            &ldquo;Consistensy beats talent<span>.</span>&rdquo;
          </h1>
          <p>L. Carolina-Litan</p>
        </article>
        <svg
          class={style.wave}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#060919"
            fill-opacity="1"
            d="M0,288L48,266.7C96,245,192,203,288,176C384,149,480,139,576,160C672,181,768,235,864,245.3C960,256,1056,224,1152,176C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div class={style.arrow}>
        <IconContext.Provider value={{ size: "2em", className: "arrow" }}>
          <BsArrowDown />
        </IconContext.Provider>
      </div>
    </>
  );
};

export default Accueil;
