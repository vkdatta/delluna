export const name="oven-light";
export const id="dl_e5853752a2a04712b9c0";
export const url=new URL("../icons/oven-light.svg?v=394706a1894410f475f98fd71aede9d64ec8ae49e5e5efc8f91c833c8cc429ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
