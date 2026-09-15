export const name="dashboard_2_gear";
export const id="dl_d447be1b04b94722bfff";
export const url=new URL("../icons/D/dashboard_2_gear.svg?v=4a19da0b01a9cc13c7810b43616efed6d51705a5eccd9dd38d7fd60e35ff500a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
