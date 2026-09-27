export const name="camera-rotate-duotone";
export const id="dl_e5c2349a729144cf8ec1";
export const url=new URL("../icons/camera-rotate-duotone.svg?v=0eb76e4544b72a1fae1fea224f143a9c5690213555bacf894a468b2a63dfd8b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
