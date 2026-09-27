export const name="salinity-fill";
export const id="dl_edc9188d826e61c7aea9";
export const url=new URL("../icons/salinity-fill.svg?v=d8e7b271a5a9d4ba8d57732deef395b5a558de57f0607480763eecb00db6eb7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
