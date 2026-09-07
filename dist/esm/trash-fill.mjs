export const name="trash-fill";
export const id="dl_5a58d2c73fac4874a33f";
export const url=new URL("../icons/T/trash-fill.svg?v=f78767cc15e1a7d6eea49c4efb515cf6fceaf07fbc421e8ce18373d07c14b673",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
