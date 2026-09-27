export const name="h_plus_mobiledata_badge-fill";
export const id="dl_1d142b57314cec18477d";
export const url=new URL("../icons/h_plus_mobiledata_badge-fill.svg?v=b8587b7de8b0eff4802deb6fa999dfb7bbda26cc32d681f9fa202cc8f864a45d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
