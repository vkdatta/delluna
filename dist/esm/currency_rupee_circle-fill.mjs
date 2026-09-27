export const name="currency_rupee_circle-fill";
export const id="dl_f62ad36e0e20e74abce9";
export const url=new URL("../icons/currency_rupee_circle-fill.svg?v=85f992616749cc67cf4521d395c529d64f3313d58a11b23f9331a7c41d4c9d8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
