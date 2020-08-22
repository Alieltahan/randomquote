import http from "./httpService";

const apiEndPoint = `/quotes`;

export function getQuotes() {
  return http.get(apiEndPoint);
}
