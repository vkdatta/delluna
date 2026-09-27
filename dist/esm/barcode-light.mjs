export const name="barcode-light";
export const id="dl_74e870c45500403c9a66";
export const url=new URL("../icons/barcode-light.svg?v=891a613389a9df0c613d3eb7170b35602dab1aed3da3bbe5fd88dfc27ae6d771",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
