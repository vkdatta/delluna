export const name="van-duotone";
export const id="dl_d5a864476de7b324f11a";
export const url=new URL("../icons/van-duotone.svg?v=ce5e514594dd6b1fafed99e2b41cdc9dda9be545d68c46c59c71111de3ef4837",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
