export const name="money";
export const id="dl_09eb634d0ffd4c63a64f";
export const url=new URL("../icons/money.svg?v=8c2247166b387e4bc26b95754dab1e3edf4e177bc50c401a243321446c6dfabc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
