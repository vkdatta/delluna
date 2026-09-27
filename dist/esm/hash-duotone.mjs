export const name="hash-duotone";
export const id="dl_40be942ffd3d4fd48c0a";
export const url=new URL("../icons/hash-duotone.svg?v=37412726b695ebce51b2ad081f938505bb5ae63ba0f29bf2541a5eb6325727c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
