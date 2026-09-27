export const name="currency_rupee_circle";
export const id="dl_29c64222ffd483011315";
export const url=new URL("../icons/currency_rupee_circle.svg?v=c8a231214ddea6591cdafab57caf614e2823f165636fb6b5b2832582394dd3ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
