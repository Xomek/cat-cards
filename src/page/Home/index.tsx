import { FC } from "react";
import { CatsFoodList } from "../../components";
import { filterStyles } from "../../helpers/filterStyles";
import {
  ETaste,
  EWeightFood,
  ICatsFood,
} from "../../interfaces/catsFood.interface";
import styles from "./Home.module.scss";

const Home: FC = () => {
  const homeStyles = filterStyles(["page"]);

  const catsFoodArr: ICatsFood[] = [
    {
      id: "1",
      title: "Нямушка",
      taste: ETaste.liver,
      servings: 10,
      present: 1,
      weight: EWeightFood.zeroFive,
      description: "Печень утки разварная с артишоками.",
      count: 12,
      imgSrc: "/assets/image/cat3.png",
    },
    {
      id: "2",
      title: "Нямушка",
      taste: ETaste.fish,
      servings: 40,
      present: 2,
      weight: EWeightFood.two,
      description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
      count: 0,
      imgSrc: "/assets/image/cat.png",
    },
    {
      id: "3",
      title: "Нямушка",
      taste: ETaste.chiken,
      servings: 100,
      present: 5,
      weight: EWeightFood.five,
      description: "Филе из цыплят с трюфелями в бульоне.",
      count: 32,
      imgSrc: "/assets/image/cat2.png",
    },
  ];

  return (
    <div className={homeStyles}>
      <div className="container">
        <h2 className={styles.title}>Ты сегодня покормил кота?</h2>
        <CatsFoodList catsFoodArr={catsFoodArr} />
      </div>
    </div>
  );
};

export default Home;
