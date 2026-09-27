export const name="design_services-fill";
export const id="dl_0ec146255f1765f4a6ae";
export const url=new URL("../icons/design_services-fill.svg?v=fd36fde56a3d9bc653efa7d2d1a5874c3cc1efd84a40d343c34434005eac7b15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
