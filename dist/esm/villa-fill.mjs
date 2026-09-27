export const name="villa-fill";
export const id="dl_caa7244d2ca0fd0b3aca";
export const url=new URL("../icons/villa-fill.svg?v=b3b3ed2a76b1498c5aa146aa52b4a1066a82bc54ec332c1d5f2229ee698b12f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
