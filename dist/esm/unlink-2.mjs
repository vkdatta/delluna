export const name="unlink-2";
export const id="dl_ea682da779fc48fd9d6a";
export const url=new URL("../icons/unlink-2.svg?v=c4be1cdcb1cd31b4b768c212e06479cca9e5ab8e15460771c5db5d4a657b2c12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
