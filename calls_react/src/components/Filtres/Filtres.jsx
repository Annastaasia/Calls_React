import { useState } from "react";
import styles from "./filtres.module.scss";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import Vectordown from "../../assets/SVG/Vectordown.jsx";

export default function Filters() {
  const [isDropdown, setDropdown] = useState(false);

  const ChosenFilter = useSelector((state) => state.Filter.typeFilter);
  const dispatch = useDispatch();
  function changeChosenType(ChosenType) {
    dispatch({ type: "DISPATCH CHOSEN TYPE", payload: ChosenType });
  }

  return (
    <div className={styles.filters}>
      <div className={styles.filter}>
        <ButtonDropdown
          isOpen={isDropdown}
          toggle={() => setDropdown(!isDropdown)}
        >
          <DropdownToggle className={styles.chose} color="white">
            <p className={styles.text}>{ChosenFilter} </p>
            <div className={styles.vector}>
              <Vectordown />
            </div>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              className={styles.dropdownItem}
              onClick={() => {
                changeChosenType("Все типы");
              }}
            >
              Все типы
            </DropdownItem>
            <DropdownItem
              className={styles.dropdownItem}
              onClick={() => {
                changeChosenType("Входящие");
              }}
            >
              Входящие
            </DropdownItem>
            <DropdownItem
              className={styles.dropdownItem}
              onClick={() => {
                changeChosenType("Исходящие");
              }}
            >
              Исходящие
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
      <div className={styles.filter}>
        <p className={styles.text}>Все сотрудники </p>
        <div className={styles.vector}>
          <Vectordown />
        </div>
      </div>
      <div className={styles.filter}>
        <p className={styles.text}>Все звонки </p>
        <div className={styles.vector}>
          <Vectordown />
        </div>
      </div>
      <div className={styles.filter}>
        <p className={styles.text}>Все источники </p>
        <div className={styles.vector}>
          <Vectordown />
        </div>
      </div>
      <div className={styles.filter}>
        <p className={styles.text}>Все оценки </p>
        <div className={styles.vector}>
          <Vectordown />
        </div>
      </div>
      <div className={styles.filter}>
        <p className={styles.text}>Все ошибки </p>
        <div className={styles.vector}>
          <Vectordown />
        </div>
      </div>
    </div>
  );
}
