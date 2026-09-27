export const name="outpatient-fill";
export const id="dl_f83c03dc839e6e8fbe4f";
export const url=new URL("../icons/outpatient-fill.svg?v=8d7cc5aa9b7a5a29c0aac6c4032cd4e62e97c88634eca77607560153f87285fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
