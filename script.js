import { obj } from "./employs.js";


for (let i = 0; i < obj.length; i++) {
  let data = obj[i];
   console.log("first Name:"  + data.firstName + ", Last Name:" + data.lastName);
}