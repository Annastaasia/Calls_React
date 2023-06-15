import styles from "./header.module.scss";
// import { useSelector } from "react-redux";
import SearchIcon from "../../assets/images/search.svg";
import Vectordown from "../../assets/SVG/Vectordown.jsx";
import UserPhoto from "../../assets/images/userfoto.png";
import ExitSVG from "../../assets/SVG/ExitSVG.jsx";
import Calls from "../../assets/SVG/CallsSVG.jsx";
import Mail from "../../assets/SVG/MailSVG.jsx";
import ExitUser from "../../assets/SVG/ExitUserSVG.jsx";
// import Progress from "../../commons/Progress/Progress.jsx";
// import "../../commons/Progress/progress.scss";
// import red from "../../commons/Progress/red.module.scss";
// import yellow from "../../commons/Progress/yellow.module.scss";
// import green from "../../commons/Progress/green.module.scss";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  // const state = useSelector((state) => state.header);
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
        <div className="profile">
          <div className="profile__data">
            <div className="nameAndOut">
              <div className="name">Упоров Кирилл</div>
              <NavLink to="/exit" className="exit">
                <ExitSVG />
              </NavLink>
            </div>
            <div className="jobAndlocation">
              <div className="job">Директор</div>
              <div className="point"></div>
              <div className="location">Санкт-Петербург</div>
            </div>
            <div className="phone">
              <Calls />
              <div className="number">8 (800) 333-17-21</div>
            </div>
            <div className="email">
              <Mail />
              <div className="mail">hi@skilla.ru</div>
            </div>
          </div>
          <div className="profile__article">
            <div className="profile__title">Операторы</div>
            <div className="profile__item">
              {/* <img
                className={state.UserPhoto}
                src={UserPhoto}
                alt="userphoto"
              /> */}
              <div className="profile__item_name">Мирон Батонов</div>
              <ExitUser />
            </div>
            <div className="profile__item">
              {/* <img
                className={state.UserPhoto}
                src={UserPhoto}
                alt="userphoto"
              /> */}
              <div className="profile__item_name">Алексей Ильин</div>
              <ExitUser />
            </div>
            <div className="profile__item">
              {/* <img
                className={state.UserPhoto}
                src={UserPhoto}
                alt="userphoto"
              /> */}
              <div className="profile__item_name">
                Милана Константинопольская
              </div>
              <ExitUser />
            </div>
          </div>
          <div className="profile__article">
            <div className="profile__title">Логисты</div>
            <div className="profile__item">
              {/* <img
                className={state.UserPhoto}
                src={UserPhoto}
                alt="userphoto"
              /> */}
              <div className="profile__item_name">Александра Сизых</div>
              <ExitUser />
            </div>
            <div className="profile__item">
              {/* <img
                className={state.UserPhoto}
                src={UserPhoto}
                alt="userphoto"
              /> */}
              <div className="profile__item_name">Илья Алексеев</div>
              <ExitUser />
            </div>
            <div className="profile__item">
              {/* <img src={state.avatar} alt="avatar" /> */}
              <div className="profile__item_name">Владимир Петров</div>
              <ExitUser />
            </div>
          </div>
          <div className="profile__article">
            <div className="profile__title">Бухгалтеры</div>
            <div className="profile__item">
              {/* <img src={state.avatar} alt="avatar" /> */}
              <div className="profile__item_name">Полина Калинина</div>
              <ExitUser />
            </div>
            <div className="profile__item">
              {/* <img src={state.avatar} alt="avatar" /> */}
              <div className="profile__item_name">Наталья Натальева</div>
              <ExitUser />
            </div>
            <div className="profile__item">
              {/* <img src={state.avatar} alt="avatar" /> */}
              <div className="profile__item_name">
                Константин Константинопольский
              </div>
              <ExitUser />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
