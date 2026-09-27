export const name="lte_plus_mobiledata_badge";
export const id="dl_5075f30e609c7040018b";
export const url=new URL("../icons/lte_plus_mobiledata_badge.svg?v=96ac2fb2acb5d83c2a10e356d7f913a4652eacea4d5a670c7de030c1db25c962",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
