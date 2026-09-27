export const name="crop_free";
export const id="dl_e7693675ae47e49b1814";
export const url=new URL("../icons/crop_free.svg?v=1615cd18521d85a3d3245c8a788d0bf1df740998d59d37bf79611d099d37507b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
