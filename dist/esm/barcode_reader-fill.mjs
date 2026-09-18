export const name="barcode_reader-fill";
export const id="dl_5899e4721822464b99e9";
export const url=new URL("../icons/barcode_reader-fill.svg?v=cdb77b6404f2f082a13a0307bc75502376570d21b5d2f7af527562a68f17a295",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
