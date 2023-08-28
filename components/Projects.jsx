import style from "../styles/Projects.module.scss";
import Image from "next/image";
import luluDesign from "../public/projects/luluDesign.png";
import worldMap from "../public/projects/worldMap.png";
import wosEcommerce from "../public/projects/wosEcommerce.png";
import spiralGalaxy from "../public/projects/spiralGalaxy.png";
import hauntedHouse from "../public/projects/hauntedHouse.png";
import luluMovies from "../public/projects/luluMovies.png";
import africa from "../public/projects/africa.png";
import caraibe_trip from "../public/projects/caraibe_trip.png";
import sony from "../public/projects/sony.png";
import ufc from "../public/projects/ufc.png";
import mysherpa from "../public/projects/mysherpa.png";

const Projects = () => {
  return (
    <div class={style.container}>
      <h2>Projets</h2>
      <div class={style.slider}>
      <span style={{ "--i": 1 }}>
          <Image
            src={africa}
            alt="L'Afrique est gréante, IT Luxuoso"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </span>
        <span style={{ "--i": 2 }}>
          <Image
            src={ufc}
            alt="environnement 3D  maison hantée, IT Luxuoso"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </span>
        <span style={{ "--i": 4 }}>
          <Image
            src={spiralGalaxy}
            alt="3D Spiral galaxy, IT Luxuoso"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </span>
        <span style={{ "--i": 5 }}>
          <Image
            src={luluMovies}
            alt="Lulu Movies, IT Luxuoso"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </span>
        <span style={{ "--i": 3 }}>
          <Image
            src={luluDesign}
            alt="Lulu Design site vitrine, IT Luxuoso"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </span>
        <span style={{ "--i": 6 }}>
          <Image
            src={wosEcommerce}
            alt="WOS e-commerce, IT Luxuoso"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </span>
        <span style={{ "--i": 7 }}>
          <Image
            src={caraibe_trip}
            alt="Caraibes Trip agence de voyage, IT Luxuoso"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </span>
        <span style={{ "--i": 8 }}>
          <Image
            src={sony}
            alt="Sony site vitrine marketing numérique, IT Luxuoso"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </span>
      </div>
      <a href="https://github.com/Luid425" target="_blank" rel="noreferrer">
        <Image src="/icons/github.png" alt="github" width="50" height="50" />
      </a>
    </div>
  );
};

export default Projects;
