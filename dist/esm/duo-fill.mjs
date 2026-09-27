export const name="duo-fill";
export const id="dl_7d5135c7c8ac533371c0";
export const url=new URL("../icons/duo-fill.svg?v=d929f207fb656ca30ab2ce7747c490c8ba4fd563707cfc6d8fd73ffc562d880a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
