export const name="pen_size_3-fill";
export const id="dl_18c99471c29e44288d44";
export const url=new URL("../icons/pen_size_3-fill.svg?v=456d1e66a6d291bfe82bcb8b3737877358a980c137598bfa235aca5eb25849fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
