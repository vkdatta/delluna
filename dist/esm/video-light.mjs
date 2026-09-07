export const name="video-light";
export const id="dl_e1d291acdaee478d8be8";
export const url=new URL("../icons/V/video-light.svg?v=844a051151510e896915e65412bbe397a35e2bb7c06698ca6090d60abb0f74a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
