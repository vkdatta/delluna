export const name="calendar-plus-fill";
export const id="dl_ba102680c8f244a88aee";
export const url=new URL("../icons/calendar-plus-fill.svg?v=4cfb1d044bf705638a9b5221e9b058c535162488e1853244bb394c9f074007b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
