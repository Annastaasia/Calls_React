import styles from "./header.module.scss";
import SearchIcon from "../../assets/images/search.svg";
// import RewindArrowIcon from "../../icons/RewindArrowIcon";
import UserPhoto from "../../assets/images/userfoto.png";
import Progress from "../../commons/Progress/Progress.jsx";
import "../../commons/Progress/progress.scss";
import red from "../../commons/Progress/red.module.scss";
import yellow from "../../commons/Progress/yellow.module.scss";
import green from "../../commons/Progress/green.module.scss";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.greyText}>Среда, 13 окт</div>
      <div className={styles.blackText}>
        <div className={styles.blackText}>
          Новые звонки <span className={styles.greenText}>20 из 30 шт</span>
        </div>
        <Progress theme={green} />
      </div>
      <div className={styles.date}>
        <div className={styles.blackText}>
          Качество разговоров <span className={styles.yellowText}>40%</span>
        </div>
        <Progress theme={yellow} />
      </div>
      <div className={styles.date}>
        <div className={styles.blackText}>
          Конверсия в заказ <span className={styles.redText}>67%</span>
        </div>
        <Progress theme={red} />
      </div>

      <div className={styles.greyText}>
        <img className={styles.icon} src={SearchIcon} alt="search" />
        ИП Сидорова Александра Михайловна
        {/* <RewindArrowIcon direction="Bottom" /> */}
      </div>

      <div className={styles.date}>
        <img className={styles.UserPhoto} src={UserPhoto} alt="userphoto" />
        {/* <RewindArrowIcon direction="Bottom" /> */}
      </div>
    </header>
  );
}
