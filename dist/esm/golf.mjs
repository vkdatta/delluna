export const name="golf";
export const id="dl_c913571b864a4d33be51";
export const url=new URL("../icons/golf.svg?v=b2d0542c5b8997a0b5ccbb1a74dab6b0abec762a9dd9854f5f2a4d951ae8b09d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
