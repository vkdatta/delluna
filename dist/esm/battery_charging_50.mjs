export const name="battery_charging_50";
export const id="dl_55ea782edd2e8881f610";
export const url=new URL("../icons/battery_charging_50.svg?v=6894c41bfdf05d994354d388a6c2d2c241128dec03363232e55c9a42077a3479",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
