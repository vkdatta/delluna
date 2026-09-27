export const name="fire_truck-fill";
export const id="dl_f41c77cfceaef7a99fac";
export const url=new URL("../icons/fire_truck-fill.svg?v=0b037276790070e507d8fd672e612ac2086b14418a60e2588c5dd13fa8250369",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
