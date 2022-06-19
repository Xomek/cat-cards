import { FC, HTMLAttributes } from "react";
import { filterStyles } from "../../../helpers/filterStyles";
import { ICatsFood } from "../../../interfaces/catsFood.interface";
import styles from "./CatsFood.module.scss";

interface ICatsFoodProps extends HTMLAttributes<HTMLDivElement> {
  catsFood: ICatsFood;
}

const CatsFood: FC<ICatsFoodProps> = ({ className, catsFood, ...props }) => {
  const catsFoodStyles = filterStyles([styles.catsFood, className]);

  return (
    <div className={catsFoodStyles} {...props}>
      <div className={styles.card}>
        <div className={styles.tagname}>Сказачное заморское яство</div>
        <div className={styles.title}>
          {catsFood.title}
          <span>{catsFood.taste}</span>
        </div>
        <div>
          <div>
            <span className={styles.servings}>{catsFood.servings}</span>порций
          </div>
          <span className={styles.present}>
            {catsFood.present === 1 ? (
              "мышь в подарок"
            ) : catsFood.present === 2 ? (
              <div>
                <span className={styles.mouseCount}>{catsFood.present}</span>
                мыши в подарок
              </div>
            ) : (
              <div>
                <span className={styles.mouseCount}>{catsFood.present}</span>
                мышей в подарок
                <div>заказчик доволен</div>
              </div>
            )}
          </span>
        </div>
        <div className={styles.circle}>
          <div className={styles.weight}>{catsFood.weight}</div>
          <span className={styles.kg}>кг</span>
        </div>
      </div>
      <div className={styles.link}>
        <span className={styles.linkText}>Чего сидишь? Порадуй котэ,</span>
        <a href="#">Купи</a>
      </div>
    </div>
  );
};

export default CatsFood;
