export const name="arrow_insert-fill";
export const id="dl_ac36dda231c35f6e141a";
export const url=new URL("../icons/arrow_insert-fill.svg?v=a0d957a6d493d1573611e07ceed1411973c88b65b44f18fba457860ef4d9018a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
