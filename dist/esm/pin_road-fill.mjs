export const name="pin_road-fill";
export const id="dl_b8c70dc32a4eddeb723c";
export const url=new URL("../icons/pin_road-fill.svg?v=88fceced07d2eec8af37271a2cdeb94dfa5c747e1cc1407b184cd553d87c6cfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
