export const name="lucid_1-bottle-wine";
export const id="dl_049ef70374624d54a559";
export const url=new URL("../icons/lucid_1-bottle-wine.svg?v=0b415550e0c662f16c705c82fca22f5ed3c633d4c6edcf6935c2aae06b9d9c5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
