export const name="barcode_reader";
export const id="dl_4bda4fe1282da4cb1acb";
export const url=new URL("../icons/barcode_reader.svg?v=672a65dd29cb40d5d1868d9af8fc62c83abae7ec024f78ef73d73cfa5b2b2c13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
