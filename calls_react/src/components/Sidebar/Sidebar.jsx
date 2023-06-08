import styles from "./sidebar.module.scss";
import Logo from "../../assets/images/logo.png";
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
// import {
//   PaymentSVG,
//   AddOrderSVG,
// } from "../../commons/SVG/SVG.jsx";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Link to="/">
        <img src={Logo} className={styles.logo} alt="logo"></img>
      </Link>
      <div className="nav">
        <NavLink to="results" className={styles.item}>
          <div className="nav__item_svg">
            <ResultsSVG />
          </div>
          <div className="nav__item_text">Итоги</div>
        </NavLink>
        <NavLink to="orders" className={styles.item}>
          <div className="nav__item_svg">
            <OrdersSVG />
          </div>
          <div className="nav__item_text">Заказы</div>
        </NavLink>
        <NavLink to="messages" className={styles.item}>
          <div className="nav__item_svg">
            <MessagesSVG />
          </div>
          <div className="nav__item_text">Сообщения</div>
        </NavLink>
        <NavLink to="calls" className={styles.item}>
          <div className="nav__item_svg">
            <CallsSVG />
          </div>
          <div className="nav__item_text">Звонки</div>
        </NavLink>
        <NavLink to="counterparties" className={styles.item}>
          <div className="nav__item_svg">
            <ClientsSVG />
          </div>
          <div className="nav__item_text">Контрагенты</div>
        </NavLink>
        <NavLink to="documentation" className={styles.item}>
          <div className="nav__item_svg">
            <DocumentationSVG />
          </div>
          <div className="nav__item_text">Документы</div>
        </NavLink>
        <NavLink to="performers" className={styles.item}>
          <div className="nav__item_svg">
            <EmployeeSVG />
          </div>
          <div className="nav__item_text">Исполнители</div>
        </NavLink>
        <NavLink to="reports" className={styles.item}>
          <div className="nav__item_svg">
            <ReportsSVG />
          </div>
          <div className="nav__item_text">Отчеты</div>
        </NavLink>
        <NavLink to="knowledgeBase" className={styles.item}>
          <div className="nav__item_svg">
            <InfoSVG />
          </div>
          <div className="nav__item_text">База знаний</div>
        </NavLink>
        <NavLink to="settings" className={styles.item}>
          <div className="nav__item_svg">
            <SettingsSVG />
          </div>
          <div className="nav__item_text">Настройки</div>
        </NavLink>
      </div>
      {/* <div className="buttons">
        <NavLink to="add" className="button">
          <span className="button__text_add">Добавить заказ</span>
          <AddOrderSVG />
        </NavLink>
        <NavLink to="payment" className="button">
          <span className="button__text_payment">Оплата</span>
          <PaymentSVG />
        </NavLink>
      </div> */}
    </div>
  );
}
