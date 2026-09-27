export const name="shield_watch";
export const id="dl_44a31ecb7d0d46863e13";
export const url=new URL("../icons/shield_watch.svg?v=b2c8200d47ea65c497020d56d99ce1249ffc1b8685d42919dc1022de28b451dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
