export const name="wifi-high";
export const id="dl_bad10f95ce0649c7a3ee";
export const url=new URL("../icons/wifi-high.svg?v=dfc9c57311966b15e92c1933bcb2c7429fe2d94aae316addd19f77f05f51c5a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
