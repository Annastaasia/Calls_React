import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function POSTGET(url, method, getParam = null, headers) {
  const fullurl = getParam
    ? url +
      "?" +
      getParam.reduce((sum, current) => {
        return sum + current + "&";
      }, "")
    : url;

  const dispatch = useDispatch();

  function FetchData() {
    fetch(fullurl, {
      method: method,
      headers: headers,
    })
      .then((responce) => {
        if (!responce.ok) {
          throw new Error(responce.statusText);
        }
        return responce;
      })
      .then((responce) => responce.json())
      .then((responce) => dispatch(FetchDataSuccess(responce)));
  }
  function FetchDataSuccess(responce) {
    return {
      type: "FETCH_DATA_SUCCESS",
      payload: responce,
    };
  }
  const Filter = useSelector((state) => state.Filter);
  useEffect(() => {
    FetchData(url);
  }, [Filter.periodFilter]);
  return;
}
