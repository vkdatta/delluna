export const name="calendar_meal-fill";
export const id="dl_e67a9ac003df497883f7";
export const url=new URL("../icons/calendar_meal-fill.svg?v=54edeaf0908f59caaa1f89e3df20e362703050171c3f22df22fbb925bb187af9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
