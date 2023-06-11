import Calls from "../Calls/Calls.jsx";
import POSTGET from "../../store/POST.jsx";
import { useSelector } from "react-redux";

export default function CallsMap() {
  const ChosenFilter = useSelector((state) => state.Filter);
  const CallsList = useSelector((state) => state.calls.results);

  POSTGET(
    "https://api.skilla.ru/mango/getList",
    "POST",
    [
      "date_start=" + ChosenFilter.periodFilter[0],
      "date_end=" + ChosenFilter.periodFilter[1],
      "limit=1000",
    ],
    { Authorization: "Bearer testtoken" }
  );

  let FiltredData = []; //filter callslist (choose right call type)
  CallsList &&
    (FiltredData = CallsList.filter((elem) => {
      return (
        ChosenFilter.typeFilter === "Все типы" ||
        (ChosenFilter.typeFilter === "Входящие" && elem.in_out === 1) ||
        (ChosenFilter.typeFilter === "Исходящие" && elem.in_out === 0)
      );
    }));

  if (FiltredData === undefined) return <></>;
  return (
    <>
      {FiltredData.map((unit) => (
        <Calls
          key={unit.id}
          in_out={unit.in_out}
          status={unit.status}
          date={unit.date}
          person_avatar={unit.person_avatar}
          from_site={unit.from_site}
          source={unit.source}
          score={unit.score}
          time={unit.time}
          contact_name={unit.contact_name}
          contact_company={unit.contact_company}
          from_number={unit.from_number}
          to_number={unit.to_number}
          record={unit.record}
        />
      ))}
    </>
  );
}
