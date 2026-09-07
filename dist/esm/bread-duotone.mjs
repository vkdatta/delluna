export const name="bread-duotone";
export const id="dl_9e65262ec382429889ee";
export const url=new URL("../icons/bread-duotone.svg?v=f4340fa328f19440443b4e727eb94a57ff1a4a57b45379814e871d07746964d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
