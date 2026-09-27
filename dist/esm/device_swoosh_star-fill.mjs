export const name="device_swoosh_star-fill";
export const id="dl_91609c120c3934eb2606";
export const url=new URL("../icons/device_swoosh_star-fill.svg?v=19b057de14ec291c5d1dc922a438a17d614221719a28b68d9c212ddc8d99e04e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
