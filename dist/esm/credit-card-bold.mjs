export const name="credit-card-bold";
export const id="dl_abe7ca05106f47e68ee5";
export const url=new URL("../icons/credit-card-bold.svg?v=50a1fce58dfc479ffb59d2ef51c3b4ea87f12e0b0f88b031500e8bbf79bfd5f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
