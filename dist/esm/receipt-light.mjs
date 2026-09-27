export const name="receipt-light";
export const id="dl_c94b2b711e78498ea4f6";
export const url=new URL("../icons/receipt-light.svg?v=b232078c38614397343c1b6337324834e10d1fa0e226d518484084cb695bcbdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
