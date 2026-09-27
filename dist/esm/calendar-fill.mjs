export const name="calendar-fill";
export const id="dl_77bd2f1c7d2d48bf8634";
export const url=new URL("../icons/calendar-fill.svg?v=f1fb74da32f7f044b0b4e959de94f121b821c83cf422dc2cf8e9f73f09370396",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
