export const name="calendar_meal_2";
export const id="dl_0df1a9f326c573a52c74";
export const url=new URL("../icons/calendar_meal_2.svg?v=19795232449537429964242ecd1ab924ba087ef59d3776fc30376d95840efcbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
