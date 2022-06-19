import { FC, HTMLAttributes } from "react";
import { filterStyles } from "../../../helpers/filterStyles";
import { ICatsFood } from "../../../interfaces/catsFood.interface";
import styles from "./CatsFood.module.scss";

interface ICatsFoodProps extends HTMLAttributes<HTMLDivElement> {
  catsFood: ICatsFood;
}

const CatsFood: FC<ICatsFoodProps> = ({ className, catsFood, ...props }) => {
  const catsFoodStyles = filterStyles([styles.catsFood, className]);

  return <div className={catsFoodStyles} {...props}></div>;
};

export default CatsFood;
