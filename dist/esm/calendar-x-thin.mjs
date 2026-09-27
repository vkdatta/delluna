export const name="calendar-x-thin";
export const id="dl_de951042210648db80fa";
export const url=new URL("../icons/calendar-x-thin.svg?v=de5bc9d8274197233a48dae00ed50d0fdbfefe4ca974be62db484eaaf1510665",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
