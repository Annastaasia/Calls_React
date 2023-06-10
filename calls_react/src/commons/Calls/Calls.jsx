import styles from "./calls.module.scss";
import CallsIcon from "../../assets/SVG/CallsIcon.jsx";
import PersonIcon from "../../assets/images/person.png";
import Audio from "../../commons/Audio/Audio.jsx";

export default function CallLine(props) {
  function formatTime(time) {
    let hours = Math.floor(time / 60 / 60);
    let minutes = Math.floor(time / 60) - hours * 60;
    let seconds = (time % 60).toString().padStart(2, "0");
    return (hours ? hours + ":" : " ") + minutes + ":" + seconds;
  }

  let clientInfo = [];
  props.contact_name && clientInfo.push(props.contact_name);
  props.contact_company && clientInfo.push(props.contact_company);
  props.in_out && props.from_number && clientInfo.push(props.from_number);
  !props.in_out && props.to_number && clientInfo.push(props.to_number);

  return (
    <div className={styles.callLine}>
      <div className={styles.arrow}>
        <CallsIcon in_out={props.in_out} status={props.status} />
      </div>
      <div className={styles.time_of_call}>{props.date.slice(11, 16)}</div>
      {props.person_avatar ? (
        <img
          src={props.person_avatar}
          alt="personicon"
          className={styles.person_avatar}
        />
      ) : (
        <div className={styles.person_avatar}></div>
      )}
      {props.from_site ? (
        <img src={PersonIcon} className={styles.from_site} alt="personicon" />
      ) : (
        <div className={styles.from_site}></div>
      )}
      <div className={styles.client_info}>
        <div className={styles.client_info__first_line}>{clientInfo[0]}</div>
        <div className={styles.client_info__second_line}>{clientInfo[1]}</div>
      </div>
      <div className={styles.source}>{props.source}</div>
      <div className={styles.score}>{props.score}</div>
      <div className={styles.time}>
        {props.record ? (
          <Audio record_id={props.record} time={formatTime(props.time)} />
        ) : (
          formatTime(props.time)
        )}
      </div>
    </div>
  );
}
