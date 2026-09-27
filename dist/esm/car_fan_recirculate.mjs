export const name="car_fan_recirculate";
export const id="dl_afe353c4536b54f5bae3";
export const url=new URL("../icons/car_fan_recirculate.svg?v=d3cb24c2d2be43944ef78872075c3001e9211489fa3ca10207d09ac66c050d2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
