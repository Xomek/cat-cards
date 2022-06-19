import { FC, HTMLAttributes, useEffect, useState } from "react";
import { filterStyles } from "../../../helpers/filterStyles";
import { ICatsFood } from "../../../interfaces/catsFood.interface";
import styles from "./CatsFood.module.scss";

interface ICatsFoodProps extends HTMLAttributes<HTMLDivElement> {
  catsFood: ICatsFood;
}

const CatsFood: FC<ICatsFoodProps> = ({ className, catsFood, ...props }) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (catsFood.count === 0) setDisabled(true);
  }, []);

  const activeBorder = selected ? styles.selected : "";
  const activeCircle = selected ? styles.activeCircle : "";
  const disabledCard = disabled ? styles.disabledCard : "";

  const catsFoodStyles = filterStyles([styles.catsFood, className]);
  const cardStyles = filterStyles([activeBorder, disabledCard, styles.card]);
  const circleStyles = filterStyles([activeCircle, styles.circle]);

  const onClickCard = () => {
    if (!disabled) {
      setSelected((prevState) => !prevState);
    }
  };

  return (
    <div className={catsFoodStyles} {...props}>
      <div className={cardStyles} onClick={onClickCard}>
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
        <div className={circleStyles}>
          <div className={styles.weight}>{catsFood.weight}</div>
          <span className={styles.kg}>кг</span>
        </div>
      </div>
      {selected && !disabled ? (
        <div className={styles.link}>{catsFood.description}</div>
      ) : disabled ? (
        <div className={styles.disabled}>Печалька, с курой закончился.</div>
      ) : (
        <div className={styles.link}>
          <span className={styles.linkText}>Чего сидишь? Порадуй котэ,</span>
          <a href="#" onClick={() => setSelected(true)}>
            Купи
          </a>
        </div>
      )}
    </div>
  );
};

export default CatsFood;
