export const name="table-fill";
export const id="dl_fad073c73539d13995de";
export const url=new URL("../icons/table-fill.svg?v=8d46db809fcb928d49f0499892ed3c2ef0617ad995ca62709b74fef94edb1399",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
