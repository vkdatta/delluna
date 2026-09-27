export const name="nfc-fill";
export const id="dl_860bcc8d8e23afc47500";
export const url=new URL("../icons/nfc-fill.svg?v=a472733409b298d46715851dbccb15ffe72ae96ca68c6ecd9e7f0189da3bd4db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
