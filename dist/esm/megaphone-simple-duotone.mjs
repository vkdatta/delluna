export const name="megaphone-simple-duotone";
export const id="dl_3ba9df91d34443429506";
export const url=new URL("../icons/megaphone-simple-duotone.svg?v=88e2d88c79f90e042fa67c5093c8b9c0112a58b750bb1d58dd86815e9a6ca0ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
