import { FC } from "react";
import { CatsFoodList } from "../../components";
import { ICatsFood } from "../../interfaces/catsFood.interface";

const Home: FC = () => {
  const catsFoodArr: ICatsFood[] = [];

  return (
    <div>
      <CatsFoodList catsFoodArr={catsFoodArr} />
    </div>
  );
};

export default Home;
