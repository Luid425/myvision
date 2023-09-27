import style from "../styles/Accueil.module.scss";
import Image from "next/image";
import { BsArrowDown } from "react-icons/bs";
import { IconContext } from "react-icons";
import Loading from "./Loading";
import { Suspense } from "react";
import ld_logo from "../public/icons/lulu-design.svg";

const Accueil = () => {
  return (
    <>
        <div class={style.container}>
          <header class={style.header}>
              <div class={style.background}></div>
              <div class={style.image}>
                <Image
                  
                  src={ld_logo}
                  alt="Lulu Design Logo"
                  quality={100}
                />
              </div>
              <div class={style.menu}>
                <a href="https://www.linkedin.com/in/luidgi-carolina-litan" target="_blank">Linkedin</a>
                <a href="https://github.com/Luid425" target="_blank">Github</a>
                <a href="mailto:itluxuoso@gmail.com">Mail</a>
              </div>
          </header>
          <article class={style.content}>
            <h1 class={style.title}>
              &ldquo;La régularité bat le talent<span>.</span>&rdquo;
            </h1>
            <p class={style.title2}>L. Carolina-Litan</p>
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
