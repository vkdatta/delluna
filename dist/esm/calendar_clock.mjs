export const name="calendar_clock";
export const id="dl_03a3d96aafd07245a8c0";
export const url=new URL("../icons/calendar_clock.svg?v=e600fc2907a67fe169441686d8d655281c1f17bb423f30367c9f4e68225408cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
