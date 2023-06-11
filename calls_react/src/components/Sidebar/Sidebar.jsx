import styles from "./sidebar.module.scss";
import Logo from "../../assets/images/logo.png";
import AddOrder from "../../assets/images/addorder.svg";
import Pay from "../../assets/images/pay.svg";
import ResultsSVG from "../../assets/SVG/ResultsSVG.jsx";
import OrdersSVG from "../../assets/SVG/OrdersSVG.jsx";
import MessagesSVG from "../../assets/SVG/MessagesSVG.jsx";
import CallsSVG from "../../assets/SVG/CallsSVG.jsx";
import ClientsSVG from "../../assets/SVG/ClientsSVG.jsx";
import DocumentationSVG from "../../assets/SVG/DocumentationSVG.jsx";
import EmployeeSVG from "../../assets/SVG/EmployeeSVG.jsx";
import ReportsSVG from "../../assets/SVG/ReportsSVG.jsx";
import InfoSVG from "../../assets/SVG/InfoSVG.jsx";
import SettingsSVG from "../../assets/SVG/SettingsSVG.jsx";
import SidebarButton from "../../commons/SidebarButton/SidebarButton.jsx";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Link to="/">
        <img src={Logo} className={styles.logo} alt="logo"></img>
      </Link>
      <div className={styles.nav}>
        <NavLink to="results" className={styles.item}>
          <div className={styles.svg}>
            <ResultsSVG />
          </div>
          <p className={styles.text}>Итоги</p>
        </NavLink>
        <NavLink to="orders" className={styles.item}>
          <div className={styles.svg}>
            <OrdersSVG />
          </div>
          <p className={styles.text}>Заказы</p>
        </NavLink>
        <NavLink to="messages" className={styles.item}>
          <div className={styles.svg}>
            <MessagesSVG />
          </div>
          <p className={styles.text}>Сообщения</p>
        </NavLink>
        <NavLink to="calls" className={styles.item} active="true">
          <div className={styles.svg}>
            <CallsSVG />
          </div>
          <p className={styles.text}>Звонки</p>
        </NavLink>
        <NavLink to="clients" className={styles.item}>
          <div className={styles.svg}>
            <ClientsSVG />
          </div>
          <p className={styles.text}>Контрагенты</p>
        </NavLink>
        <NavLink to="documentation" className={styles.item}>
          <div className={styles.svg}>
            <DocumentationSVG />
          </div>
          <p className={styles.text}>Документы</p>
        </NavLink>
        <NavLink to="employees" className={styles.item}>
          <div className={styles.svg}>
            <EmployeeSVG />
          </div>
          <p className={styles.text}>Исполнители</p>
        </NavLink>
        <NavLink to="reports" className={styles.item}>
          <div className={styles.svg}>
            <ReportsSVG />
          </div>
          <p className={styles.text}>Отчеты</p>
        </NavLink>
        <NavLink to="info" className={styles.item}>
          <div className={styles.svg}>
            <InfoSVG />
          </div>
          <p className={styles.text}>База знаний</p>
        </NavLink>
        <NavLink to="settings" className={styles.item}>
          <div className={styles.svg}>
            <SettingsSVG />
          </div>
          <p className={styles.text}>Настройки</p>
        </NavLink>
      </div>
      <div className={styles.buttonGroup}>
        <NavLink to="add" className={styles.button}>
          <SidebarButton icon={AddOrder} name={"Добавить заказ"} />
        </NavLink>
        <NavLink to="payment" className={styles.button}>
          <SidebarButton icon={Pay} name={"Оплата"} />
        </NavLink>
      </div>
    </div>
  );
}
