export const name="barcode_reader-fill";
export const id="dl_82b5230157398e87cd95";
export const url=new URL("../icons/barcode_reader-fill.svg?v=4eacc4193ecefd1698fd238c7b9bf690413d2774e71960b604fc1874886c6f18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
