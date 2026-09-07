export const name="tilde-fill";
export const id="dl_415a84cec91f44ac90d9";
export const url=new URL("../icons/T/tilde-fill.svg?v=3ef6c01baf37230547a86bf7b34900442c87db489035670fbd17c5be0beafc93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
