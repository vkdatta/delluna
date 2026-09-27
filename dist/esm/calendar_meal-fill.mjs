export const name="calendar_meal-fill";
export const id="dl_cd97a44d1ca03f73c7b3";
export const url=new URL("../icons/calendar_meal-fill.svg?v=dfced7e474e722fe9c3de69562e25b96fecbd65bf7aee1d39b304d2bf0337240",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
