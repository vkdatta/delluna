export const name="calendar-bold";
export const id="dl_631371e2b7664709a4c1";
export const url=new URL("../icons/calendar-bold.svg?v=6ed31bc779ad5f30b92c4f08088c37f98071a7ebfe086eb102e9dd7ea8762ead",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
