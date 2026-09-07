export const name="marker-circle";
export const id="dl_97f0c86f8b87483a9a1b";
export const url=new URL("../icons/marker-circle.svg?v=085ed0606b2e8d8272a1f096f1fac970dc027d91518fdf124b96dd86d34e582b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
