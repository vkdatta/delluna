export const name="directions_walk-fill";
export const id="dl_08bef3988160bf741eac";
export const url=new URL("../icons/directions_walk-fill.svg?v=985e0044968a52c2fdae80e287d71d497c6b8d59bef821ee7a541915a3cc40d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
