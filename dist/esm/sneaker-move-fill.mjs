export const name="sneaker-move-fill";
export const id="dl_d1d444425e42bfa60fe6";
export const url=new URL("../icons/sneaker-move-fill.svg?v=c0006a6aff7cd3b87ced04dc933597cce849e6f4af6fe65b68fe9e73b0a7641e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
