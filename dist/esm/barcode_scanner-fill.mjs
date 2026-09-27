export const name="barcode_scanner-fill";
export const id="dl_d506275706728eabe8ea";
export const url=new URL("../icons/barcode_scanner-fill.svg?v=fc3b9d4938003e598ff972ef0b9a8c102ccde0441f141d99b279629526729727",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
