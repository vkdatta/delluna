export const name="dice-three";
export const id="dl_f97ecc84457c4fa992ba";
export const url=new URL("../icons/dice-three.svg?v=3232caa809cb3d27364de89c5f4833a475bd7b2d2fb22323d4638ea1ec8d0b81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
