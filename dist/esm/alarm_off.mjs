export const name="alarm_off";
export const id="dl_a9d04abc86e9dc2d2192";
export const url=new URL("../icons/alarm_off.svg?v=667141124da582cee312f7dd4ecc5f43da5aaa4599a4eea92c7de1c7b789a65b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
