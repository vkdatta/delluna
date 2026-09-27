export const name="h_mobiledata_badge";
export const id="dl_442df90795308970a7e8";
export const url=new URL("../icons/h_mobiledata_badge.svg?v=98f2db44269317431ac7e5ead7956d260c6bec04bb4b2c777017bea2bf562334",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
