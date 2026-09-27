export const name="symptoms-fill";
export const id="dl_09ef662780353018938a";
export const url=new URL("../icons/symptoms-fill.svg?v=fb057aaa646d3cee159687e35182daea2a4430112624fb1e95a1d76cf181d103",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
