export const name="seal-warning-light";
export const id="dl_d9c67927b09c48da83b7";
export const url=new URL("../icons/S/seal-warning-light.svg?v=d0513ead531fb2ccb7d21e1b44203be8bebd09c5272c3c6aabbe00c050e22223",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
