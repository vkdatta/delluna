export const name="bell-simple-z-duotone";
export const id="dl_3e6ffdd24ece435da644";
export const url=new URL("../icons/bell-simple-z-duotone.svg?v=67a86f2d746c4406f386f3e58e10c5118e32386da3d6b4a94a0a674f18b026dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
