export const name="assistant_direction-fill";
export const id="dl_cad696688fc2e0017f21";
export const url=new URL("../icons/assistant_direction-fill.svg?v=1b1941c0e425426fec3ff4930db2445aec9b7b5ebe31902e7872ba143575a039",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
