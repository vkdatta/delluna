export const name="directions_alt_off-fill";
export const id="dl_9e8dbb984c2d8678b8a1";
export const url=new URL("../icons/directions_alt_off-fill.svg?v=d01d4808e785267e1b9d2e1c56b71479bd510f4025289f96b4c45707895384b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
