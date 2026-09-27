export const name="text-indent-duotone";
export const id="dl_70a3c780256a526b689a";
export const url=new URL("../icons/text-indent-duotone.svg?v=6d41158da4ad07b763b4ffabb731dcb4db513b9156ecc638d59508250bf278b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
