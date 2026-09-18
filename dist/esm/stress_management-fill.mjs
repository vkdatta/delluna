export const name="stress_management-fill";
export const id="dl_bfdbde3bdc764c239b07";
export const url=new URL("../icons/stress_management-fill.svg?v=8e3504d5e1c98393c10997a4eb9c709cb76bd7e6acdf43e3bc111744ec17841f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
