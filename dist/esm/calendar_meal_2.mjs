export const name="calendar_meal_2";
export const id="dl_4a57ec3046980ba2067f";
export const url=new URL("../icons/calendar_meal_2.svg?v=b1ca982f33510cca2adcc77596088a4179f41ee03be1cbc394004ebd8e36ecd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
