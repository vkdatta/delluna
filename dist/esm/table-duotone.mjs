export const name="table-duotone";
export const id="dl_498b8e1baa1548ad279b";
export const url=new URL("../icons/table-duotone.svg?v=fe9fc438d488865d6b63d209c644ff9af3d72ed535c2d2d204e959d832f39902",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
