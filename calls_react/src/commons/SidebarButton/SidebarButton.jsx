import styles from "./sidebarbutton.module.scss";

export default function SidebarButton(props) {
  return (
    <button className={styles.button}>
      <p className={styles.name}>{props.name}</p>
      <img className={styles.icon} src={props.icon} />
    </button>
  );
}
