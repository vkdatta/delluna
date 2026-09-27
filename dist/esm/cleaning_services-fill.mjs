export const name="cleaning_services-fill";
export const id="dl_8e27bdafad5e8e3d896f";
export const url=new URL("../icons/cleaning_services-fill.svg?v=070424483d5e651f8c6ad1b4badd0e5694c9eece2ccdffc12a696b81d60bca24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
