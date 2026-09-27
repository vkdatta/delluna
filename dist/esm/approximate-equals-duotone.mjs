export const name="approximate-equals-duotone";
export const id="dl_e34e0d22d1114bf6a6de";
export const url=new URL("../icons/approximate-equals-duotone.svg?v=5dd4ad80a1139bcddf241278c9c9aeb0b8f7efd168bdf9fb2861229013f7afeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
