import style from "../styles/Projects.module.scss";
import Image from "next/image";
import luluDesign from "../public/projects/luluDesign.png";
import worldMap from "../public/projects/worldMap.png";
import serverAdmin from "../public/projects/serverAdmin.png";
import wosEcommerce from "../public/projects/wosEcommerce.png";
import spiralGalaxy from "../public/projects/spiralGalaxy.png";
import hauntedHouse from "../public/projects/hauntedHouse.png";
import luluFitness from "../public/projects/luluFitness.png";
import luluMovies from "../public/projects/luluMovies.png";

const Projects = () => {
  return (
    <div class={style.container}>
      <h2>Projects</h2>
      <div class={style.slider}>
        <span style={{ "--i": 1 }}>
          <Image
            src={luluDesign}
            alt="Lulu Design showcase website"
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
            src={worldMap}
            alt="World Map data visualization"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </span>
        <span style={{ "--i": 3 }}>
          <Image
            src={serverAdmin}
            alt="Server admin interface"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </span>
        <span style={{ "--i": 4 }}>
          <Image
            src={luluMovies}
            alt="Lulu Movies search Engile"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </span>
        <span style={{ "--i": 5 }}>
          <Image
            src={wosEcommerce}
            alt="WOS e-commerce"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </span>
        <span style={{ "--i": 6 }}>
          <Image
            src={spiralGalaxy}
            alt="3D Spiral galaxy"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </span>
        <span style={{ "--i": 7 }}>
          <Image
            src={hauntedHouse}
            alt="3D Haunted house environment"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </span>
        <span style={{ "--i": 8 }}>
          <Image
            src={luluFitness}
            alt="Lulu Fitness showcase website"
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
