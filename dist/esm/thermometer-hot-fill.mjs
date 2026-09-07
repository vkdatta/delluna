export const name="thermometer-hot-fill";
export const id="dl_1692b241a27142c1bb28";
export const url=new URL("../icons/T/thermometer-hot-fill.svg?v=ee14ec86d440630414039b2c70200a66b4263a578baa89c76112215acce81ac7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
