export const name="e_mobiledata_badge-fill";
export const id="dl_f8a59352c1994cb38657";
export const url=new URL("../icons/E/e_mobiledata_badge-fill.svg?v=fbf2699bb50b9e737a04e5d826567fe231ada5b71305ef9238bcbc655c2b023f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
