export const name="calendar-minus-fill";
export const id="dl_6b3900127c5745b682b7";
export const url=new URL("../icons/calendar-minus-fill.svg?v=30aa0e297f47743f381c46ba06f081334c88b52748ce58a2d61c055cac7cb69b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
