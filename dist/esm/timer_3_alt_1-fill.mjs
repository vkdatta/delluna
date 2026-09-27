export const name="timer_3_alt_1-fill";
export const id="dl_040c6c214e30d6158127";
export const url=new URL("../icons/timer_3_alt_1-fill.svg?v=e1422953e98bd991ba64b671a22ac408b712597f5faad69e8e3eb41407c492b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
