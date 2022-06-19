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
    },
    {
      id: "2",
      title: "Нямушка",
      taste: ETaste.fish,
      servings: 40,
      present: 2,
      weight: EWeightFood.two,
    },
    {
      id: "3",
      title: "Нямушка",
      taste: ETaste.chiken,
      servings: 100,
      present: 5,
      weight: EWeightFood.five,
    },
  ];

  return (
    <div className={homeStyles}>
      <h2 className={styles.title}>Ты сегодня покормил кота?</h2>
      <CatsFoodList catsFoodArr={catsFoodArr} />
    </div>
  );
};

export default Home;
