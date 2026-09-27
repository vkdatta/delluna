export const name="barcode_scanner-fill";
export const id="dl_31952c65336a536fed82";
export const url=new URL("../icons/barcode_scanner-fill.svg?v=a62cdf578a97d12a16e286ad932e0fe56e57f0bcf7e27469cd7a1eb557808d7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
