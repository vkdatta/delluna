export const name="bag-duotone";
export const id="dl_2bc794d046b34279827d";
export const url=new URL("../icons/bag-duotone.svg?v=db98e1321fd7c1ef3d103c5d089bc4d9ab21be14e0a6f6b370e253c4f2bf790c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
