export const name="calendar_meal_2-fill";
export const id="dl_d2e1a0bed9298f552c3d";
export const url=new URL("../icons/calendar_meal_2-fill.svg?v=13984e76b1180e8f98d959584190d7e4465a08756ebbc61e3d80373d6ccd46cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
