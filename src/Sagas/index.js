import { put, takeLatest, all } from "redux-saga/effects";

function* fetchNews() {
  const json = yield fetch(
    "https://api.currentsapi.services/v1/latest-news?language=en&apiKey=ekqS6SCXSrxC1Mf9XrgC3s7HrVVECcDcQ-Ofgfz-s8bmDK5p"
  ).then(response => response.json());
  yield put({ type: "NEWS_RECEIVED", json: json.news });
}

function* actionWatcher() {
  yield takeLatest("GET_NEWS", fetchNews);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
