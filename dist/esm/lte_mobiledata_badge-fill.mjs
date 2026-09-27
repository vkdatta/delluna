export const name="lte_mobiledata_badge-fill";
export const id="dl_bfed98983c1f4b932ff9";
export const url=new URL("../icons/lte_mobiledata_badge-fill.svg?v=2597ed2685d8d00ea5e02359610ff5b5068e6897960e76877a17be867eff7533",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
