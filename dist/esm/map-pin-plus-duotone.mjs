export const name="map-pin-plus-duotone";
export const id="dl_da928b5c0bb440a18910";
export const url=new URL("../icons/map-pin-plus-duotone.svg?v=c3c2a21c2aece1f47a889fc4a8462afbf2edd7549c4fc4f865c450b3826fe07c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
