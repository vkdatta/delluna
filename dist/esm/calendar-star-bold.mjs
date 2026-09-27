export const name="calendar-star-bold";
export const id="dl_c4c5206c9b7d4aa2a7c4";
export const url=new URL("../icons/calendar-star-bold.svg?v=bddd2dd26c7d705bd7a26129f5b6e91a0bc35d30f3947397c506d23095b2ea49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
