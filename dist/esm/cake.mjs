export const name="cake";
export const id="dl_ed5f381d91d7431f9a50";
export const url=new URL("../icons/cake.svg?v=703c52c1e95f3119921b2debfe252ce8f3d851065d327362971aa0d762d5d33e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
