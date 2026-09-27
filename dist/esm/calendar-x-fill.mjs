export const name="calendar-x-fill";
export const id="dl_5cab7cc6ef4c476782f3";
export const url=new URL("../icons/calendar-x-fill.svg?v=e8cf69cc7ee9538079270b126598414a8a7480725909c8c5044d584afac3a7e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
