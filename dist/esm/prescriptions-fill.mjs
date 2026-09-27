export const name="prescriptions-fill";
export const id="dl_ae3fcd8436dccebdbedc";
export const url=new URL("../icons/prescriptions-fill.svg?v=784b21c9e6610b8c41904d34b75291761c827109f17a81d392ae271f1203ed71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
