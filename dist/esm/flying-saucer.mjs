export const name="flying-saucer";
export const id="dl_58b4c65526d0425b9c2c";
export const url=new URL("../icons/flying-saucer.svg?v=ace1c4b699adb59df321f804c811da4c01e7ba646409f800ff7b94e5687ec5af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
