import styles from "./header.module.scss";
import SearchIcon from "../../assets/images/search.svg";
// import RewindArrowIcon from "../../icons/RewindArrowIcon";
import UserPhoto from "../../assets/images/userfoto.png";
import Progress from "../../commons/Progress.jsx";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.greyText}>Среда, 13 окт</div>
      <div className={styles.blackText}>
        <div className={styles.blackText}>
          Новые звонки <span className={styles.greenText}>20 из 30 шт</span>
        </div>
        <Progress color="#28A879" progress={0.4} />
      </div>
      <div className={styles.date}>
        <div className={styles.blackText}>
          Качество разговоров <span className={styles.yellowText}>40%</span>
        </div>
        <Progress color="#FFD500" progress={0.4} />
      </div>
      <div className={styles.date}>
        <div className={styles.blackText}>
          Конверсия в заказ <span className={styles.redText}>67%</span>
        </div>
        <Progress color="#EA1A4F" progress={0.5} />
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
