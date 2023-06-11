import styles from "./main.module.scss";
import CallsMap from "../../commons/CallsMap/CallsMap.jsx";

export default function Main(props) {
  return (
    <>
      <div className={styles.mainheader}>
        <div className={styles.arrow}>Тип</div>
        <div className={styles.time}>Время</div>
        <div className={styles.person}>Cотрудник</div>
        <div className={styles.call}>Звонок</div>
        <div className={styles.source}>Источник</div>
        <div className={styles.score}>Оценка</div>
        <div className={styles.time}>Длительность</div>
      </div>
      <div className={styles.calls}>
        <CallsMap />
      </div>
    </>
  );
}
