export const name="tapas-fill";
export const id="dl_bda63fd7c71efb0c0f95";
export const url=new URL("../icons/tapas-fill.svg?v=e6c118632177035e492040868c8c20a9a2ee01928d9dd976a94092eb31dde233",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
