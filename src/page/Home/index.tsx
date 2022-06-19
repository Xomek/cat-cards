import { FC } from "react";
import { CatsFoodList } from "../../components";
import { filterStyles } from "../../helpers/filterStyles";
import { EWeightFood, ICatsFood } from "../../interfaces/catsFood.interface";

const Home: FC = () => {
  const homeStyles = filterStyles(["page"]);

  const catsFoodArr: ICatsFood[] = [
    {
      id: "1",
      title: "Нямушка с фуа-гра",
      description: "10 порций мышь в подарок",
      weight: EWeightFood.zeroFive,
    },
    {
      id: "2",
      title: "Нямушка с рыбой",
      description: "40 порций 2 мыши в подарок",
      weight: EWeightFood.two,
    },
    {
      id: "3",
      title: "Нямушка с курой",
      description: "100 порций 5 мышей в подарок заказчик доволен",
      weight: EWeightFood.five,
    },
  ];

  return (
    <div className={homeStyles}>
      <CatsFoodList catsFoodArr={catsFoodArr} />
    </div>
  );
};

export default Home;
