export const name="badge_critical_battery-fill";
export const id="dl_008e13c5d5f0bf639678";
export const url=new URL("../icons/badge_critical_battery-fill.svg?v=00ae3d7e117ab0db7334777180fb0d5fa7fd0d0c5091a41de2d04ce808c9da6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
