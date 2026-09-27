export const name="battery_4_bar-fill";
export const id="dl_37f6b5486d68bf61b32b";
export const url=new URL("../icons/battery_4_bar-fill.svg?v=765e1920a342bd834ac6352ecfa70e8987025290250c8323ba35544f2b07e8d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
