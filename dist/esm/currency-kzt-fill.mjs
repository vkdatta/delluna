export const name="currency-kzt-fill";
export const id="dl_a874104adcd44c4c8d1c";
export const url=new URL("../icons/currency-kzt-fill.svg?v=ef76c421ac175769bc3857b4b50645f4b252fa993d73a555adde30af0e50585d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
