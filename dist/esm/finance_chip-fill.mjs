export const name="finance_chip-fill";
export const id="dl_788e3408e15d86d0760b";
export const url=new URL("../icons/finance_chip-fill.svg?v=f45df239741bf1bdeafbebc312e52afe84b72cef737c729b62363e90008b3607",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
