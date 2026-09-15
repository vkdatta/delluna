export const name="battery_change-fill";
export const id="dl_d841c3bd4c734862a3a8";
export const url=new URL("../icons/B/battery_change-fill.svg?v=f6f8037cbd1e8a427f567f26dad368c9c19ad0ca574260b30e1e5e4ef6bddde0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
