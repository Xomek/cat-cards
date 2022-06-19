import { FC, HTMLAttributes } from "react";
import { filterStyles } from "../../helpers/filterStyles";
import { ICatsFood } from "../../interfaces/catsFood.interface";
import CatsFood from "./CatsFood";
import styles from "./CatsFoodList.module.scss";

interface ICatsFoodListProps extends HTMLAttributes<HTMLDivElement> {
  catsFoodArr: ICatsFood[];
}

const CatsFoodList: FC<ICatsFoodListProps> = ({
  className,
  catsFoodArr,
  ...props
}) => {
  const catsFoodListStyles = filterStyles([styles.catsFoodList, className]);

  return (
    <div className={catsFoodListStyles} {...props}>
      {catsFoodArr.map((catsFood) => (
        <CatsFood key={catsFood.id} catsFood={catsFood} />
      ))}
    </div>
  );
};

export default CatsFoodList;
