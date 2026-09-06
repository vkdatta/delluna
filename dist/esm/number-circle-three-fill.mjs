export const name="number-circle-three-fill";
export const id="dl_65cce9bfcfdb41638f6b";
export const url=new URL("../icons/number-circle-three-fill.svg?v=93c7eb90ec7ab9a8ec882b69a776c124d4a9ca4d0d5fd60a3a84b1f2aec3f7a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
