export const name="chats-teardrop-light";
export const id="dl_01ec7826881f4081a257";
export const url=new URL("../icons/chats-teardrop-light.svg?v=1c3d14e5701201ab3d13d67b575e054b1279cde73b7b264330d1d0f7c1dbf7db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
