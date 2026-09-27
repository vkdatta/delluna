export const name="baby";
export const id="dl_9b82f622618f423f94fd";
export const url=new URL("../icons/baby.svg?v=8e30258e5026608710ff94a0b1ef410aae6e6126de158916106237d114d66b88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
