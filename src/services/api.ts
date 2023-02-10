import axios from "axios"

export const kanguruApi = axios.create({
   baseURL: "https://parseapi.back4app.com",
   headers: {
      Accept: "application/json",
      "X-Parse-Application-Id": "J4VmpvYgyyMLIKv6Taw091kaYzt5TqswJHnAgJ9g",
      "X-Parse-REST-API-Key": "uEtFO1gKixJvpj1tVVMnjr6jI7jJxxqJHd18w7n4",
   },
})
