export const name="carry_on_bag-fill";
export const id="dl_935db096280922a8bc59";
export const url=new URL("../icons/carry_on_bag-fill.svg?v=aeac2be20ddd7e7916de5c6b4cdbb9a2cbaf104648d06d6f6526289dd240f2f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
