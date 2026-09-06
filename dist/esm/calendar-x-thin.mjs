export const name="calendar-x-thin";
export const id="dl_de951042210648db80fa";
export const url=new URL("../icons/calendar-x-thin.svg?v=b3510ad1a36212003d96f3d4770faba343b01310b11690031b5c52fed5ef35c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
