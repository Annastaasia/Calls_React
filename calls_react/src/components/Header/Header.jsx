import styles from "./header.module.scss";
import SearchIcon from "../../assets/images/search.svg";
import Vectordown from "../../assets/SVG/Vectordown.jsx";
import UserPhoto from "../../assets/images/userfoto.png";
// import Progress from "../../commons/Progress/Progress.jsx";
// import "../../commons/Progress/progress.scss";
// import red from "../../commons/Progress/red.module.scss";
// import yellow from "../../commons/Progress/yellow.module.scss";
// import green from "../../commons/Progress/green.module.scss";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.greyText}>Среда, 13 окт</div>
      <div className={styles.blackText}>
        <div className={styles.blackText}>
          Новые звонки <span className={styles.greenText}>20 из 30 шт</span>
        </div>
        {/* <Progress theme={green} /> */}
        <div className={styles.progress}>
          <ProgressBar
            variant="success"
            now={40}
            style={{ height: 6, borderRadius: 20 }}
          />
        </div>
      </div>
      <div className={styles.date}>
        <div className={styles.blackText}>
          Качество разговоров <span className={styles.yellowText}>40%</span>
        </div>
        <ProgressBar
          variant="warning"
          now={40}
          style={{ height: 6, borderRadius: 20 }}
        />
        {/* <Progress theme={yellow} /> */}
      </div>
      <div className={styles.date}>
        <div className={styles.blackText}>
          Конверсия в заказ <span className={styles.redText}>67%</span>
        </div>
        <ProgressBar
          variant="danger"
          now={60}
          style={{ height: 6, borderRadius: 20 }}
        />
        {/* <Progress theme={red} /> */}
      </div>

      <div className={styles.greyText}>
        <img className={styles.icon} src={SearchIcon} alt="search" />
        ИП Сидорова Александра Михайловна
        <div className={styles.vector}>
          <Vectordown />
        </div>
      </div>

      <div className={styles.user}>
        <img className={styles.UserPhoto} src={UserPhoto} alt="userphoto" />
        <div className={styles.vector}>
          <Vectordown />
        </div>
      </div>
    </header>
  );
}
