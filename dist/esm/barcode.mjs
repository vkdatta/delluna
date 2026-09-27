export const name="barcode";
export const id="dl_3231ed7ec3844d44a3d2";
export const url=new URL("../icons/barcode.svg?v=8560df1a400fa74a3ede5dc28dcdc760b041d839754aef5ffec3c76dc52b376d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
