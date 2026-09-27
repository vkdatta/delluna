export const name="bed-light";
export const id="dl_58c0f1306b774c838e8d";
export const url=new URL("../icons/bed-light.svg?v=f8ff444682d0dd74b394509c3b2ee92fb7585239dafc21190ecc756f9a000f61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
