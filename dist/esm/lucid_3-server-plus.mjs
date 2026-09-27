export const name="lucid_3-server-plus";
export const id="dl_c9b130d490584801b158";
export const url=new URL("../icons/lucid_3-server-plus.svg?v=4817934e5798d1752935f6d31a208b042b00938026c79bf17a490eb1c9b53712",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
