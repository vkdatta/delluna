export const name="image-square-duotone";
export const id="dl_91781c9a6fe148bb9dbd";
export const url=new URL("../icons/image-square-duotone.svg?v=7d05410b2d1874d7178ac58b51f285d5e4a13928de76431198114dfd1d0c7af1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
