export const name="paper-plane-duotone";
export const id="dl_41dbb935526f4a9fa8e3";
export const url=new URL("../icons/paper-plane-duotone.svg?v=4a91d4ee2bc8d7dbca681872bb8613a1f88344680e6ff614c42da4110c503667",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
