export const name="laundry-fill";
export const id="dl_e768fa10896eda7013b8";
export const url=new URL("../icons/laundry-fill.svg?v=9c07276322c92eb4e107b7def516551af2739a508df8f3b6e731f400e720cc85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
