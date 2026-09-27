export const name="hockey-fill";
export const id="dl_c327420352a440e7ae89";
export const url=new URL("../icons/hockey-fill.svg?v=4e4715d34fa71e6f71f99a44b020e150762c98db541f0183f5981e5471f9dcab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
