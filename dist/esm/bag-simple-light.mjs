export const name="bag-simple-light";
export const id="dl_1aa1f000102b4476b554";
export const url=new URL("../icons/bag-simple-light.svg?v=4bd44d8955df81c103e6b03cf456e8f0c082b211b1ec5eb77882e488864f782e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
