export const name="sneaker-duotone";
export const id="dl_5a53abb7282a4de49621";
export const url=new URL("../icons/S/sneaker-duotone.svg?v=2b4d90f29c3708d4af83fc78c89802fded0a2d53ccf1b2c68f22fb38c17f0a41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
