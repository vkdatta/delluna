export const name="lucid_3-square-arrow-right-enter";
export const id="dl_6f370a47b2e14feaa84e";
export const url=new URL("../icons/lucid_3-square-arrow-right-enter.svg?v=eac53a5d43acdbec0b044fd0b311be8563596d2ae99514311aa93ba5cbdbd757",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
