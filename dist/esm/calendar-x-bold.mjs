export const name="calendar-x-bold";
export const id="dl_be3beb72f1eb4fdf84d1";
export const url=new URL("../icons/calendar-x-bold.svg?v=0d6fc6abac6d52d2d701640e7bcac1ae51e1004817f9882ec3f1e2a921236e65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
