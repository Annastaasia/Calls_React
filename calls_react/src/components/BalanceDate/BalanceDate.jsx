import styles from "./balancedate.module.scss";
import Balance from "../../assets/images/balance.svg";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Left from "../../assets/images/left.svg";
import Right from "../../assets/images/right.svg";
import Calendar from "../../assets/images/calendar.svg";
import "bootstrap/dist/css/bootstrap.css";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function BalanceDate() {
  const DateFilterOptions = [
    {
      name: "3 дня",
      value: {
        start: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 3),
        end: new Date(),
      },
    },
    {
      name: "Неделя",
      value: {
        start: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 7),
        end: new Date(),
      },
    },
    {
      name: "Месяц",
      value: {
        start: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 30),
        end: new Date(),
      },
    },
    {
      name: "Год",
      value: {
        start: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 365),
        end: new Date(),
      },
    },
    {
      name: "Даты",
      value: {
        start: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 3),
        end: new Date(),
      },
    },
  ];

  const dispatch = useDispatch();
  const [isDropdown, setDropdown] = useState(false);

  const [isCalendarHover, setCalendarHover] = useState(false);
  function Enter() {
    setCalendarHover(true);
  }
  function Leave() {
    setCalendarHover(false);
  }

  const ChosenFilter = useSelector((state) => state.Filter);

  function previousPeriodFilter() {
    let newIndex = 0;
    DateFilterOptions.forEach((elem, index) => {
      if (elem.name === ChosenFilter.periodFilterName) {
        newIndex = index - 1;
        if (newIndex === -1) {
          newIndex = 3;
        }
      }
    });
    changePeriod(DateFilterOptions[newIndex]);
  }
  function nextPeriodFilter() {
    let newIndex = 0;
    DateFilterOptions.forEach((elem, index) => {
      if (elem.name === ChosenFilter.periodFilterName) {
        newIndex = index + 1;
        if (newIndex === 4 || newIndex === 5) {
          newIndex = 0;
        }
      }
    });
    changePeriod(DateFilterOptions[newIndex]);
  }

  function changePeriod(Period) {
    function dateFormatting(Date) {
      return (
        Date.getFullYear() +
        "-" +
        String(Date.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(Date.getDate()).padStart(2, "0")
      );
    }
    dispatch({
      type: "DISPATCH CHOSEN PERIOD",
      payload: {
        name: Period.name,
        value: [
          dateFormatting(Period.value.start),
          dateFormatting(Period.value.end),
        ],
      },
    });
  }

  return (
    <>
      <div className={styles.datePicker}>
        <div
          onClick={() => {
            previousPeriodFilter();
          }}
          className={styles.button_left}
        >
          {/* <RewindArrowIcon direction="Left" /> */}
          <img
            src={Left}
            className={styles.logo}
            direction="Left"
            alt="logo"
          ></img>
        </div>
        <ButtonDropdown
          onMouseEnter={() => {
            Enter();
          }}
          onMouseLeave={() => {
            Leave();
          }}
          className={styles.picker_value}
          isOpen={isDropdown}
          toggle={() => setDropdown(!isDropdown)}
        >
          <DropdownToggle color="white" className={styles.dropdownHeader}>
            {/* <CalendarIcon
              inlineStyle={{ position: "relative", top: "-7px", left: "-10px" }}
              hover={isCalendarHover}
            /> */}
            <img
              src={Calendar}
              className={styles.logo}
              //   inlineStyle={{ position: "relative", top: "-7px", left: "-10px" }}
              //   hover={isCalendarHover}
              alt="logo"
            ></img>
            <p className={styles.dropdownHeaderText}>
              {ChosenFilter.periodFilterName}
            </p>
          </DropdownToggle>
          <DropdownMenu className={styles.dropdownMenu}>
            <DropdownItem
              className={styles.dropdownItem}
              onClick={() => {
                changePeriod(DateFilterOptions[0]);
              }}
            >
              {DateFilterOptions[0].name}
            </DropdownItem>
            <DropdownItem
              className={styles.dropdownItem}
              onClick={() => {
                changePeriod(DateFilterOptions[1]);
              }}
            >
              {DateFilterOptions[1].name}
            </DropdownItem>
            <DropdownItem
              className={styles.dropdownItem}
              onClick={() => {
                changePeriod(DateFilterOptions[2]);
              }}
            >
              {DateFilterOptions[2].name}
            </DropdownItem>
            <DropdownItem
              className={styles.dropdownItem}
              onClick={() => {
                changePeriod(DateFilterOptions[3]);
              }}
            >
              {DateFilterOptions[3].name}
            </DropdownItem>
            <DropdownItem
              className={styles.dropdownItemChoseDate}
              onClick={() => {
                changePeriod(DateFilterOptions[4]);
              }}
            >
              Указать даты <br />
              <input
                className={styles.dateInput}
                onChange={(e) => {
                  DateFilterOptions[4].value.start = new Date(
                    Date.parse(e.target.value)
                  );
                }}
                defaultValue={ChosenFilter.periodFilter[0]}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                type="date"
              />
              -
              <input
                className={styles.dateInput}
                onChange={(e) => {
                  DateFilterOptions[4].value.end = new Date(
                    Date.parse(e.target.value)
                  );
                }}
                defaultValue={ChosenFilter.periodFilter[1]}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                type="date"
              />
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <div
          onClick={() => {
            nextPeriodFilter();
          }}
          className={styles.button_right}
        >
          {/* <RewindArrowIcon direction="Right" /> */}
          <img
            src={Right}
            className={styles.logo}
            direction="Right"
            alt="logo"
          ></img>
        </div>
      </div>
      <div className={styles.balance}>
        Баланс: <span className={styles.text}>272 &#8381;</span>
        <img className={styles.icon} src={Balance} alt="balance" />
      </div>
    </>
  );
}
