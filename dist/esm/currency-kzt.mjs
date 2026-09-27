export const name="currency-kzt";
export const id="dl_48b2ee55d2834751a55f";
export const url=new URL("../icons/currency-kzt.svg?v=acbecc4cbd417eff6a3e5a90029502506d5f6d54433f9b0d455048ae9e7dc362",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
