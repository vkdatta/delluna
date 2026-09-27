export const name="arrow_back_2-fill";
export const id="dl_d4bddcdc8bdecb8833e0";
export const url=new URL("../icons/arrow_back_2-fill.svg?v=01165cb4abd6d678c59b68ac63e5448e6b4e2463609b8cfece961855c922fcd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
