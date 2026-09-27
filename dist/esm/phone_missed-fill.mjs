export const name="phone_missed-fill";
export const id="dl_6894c9de6f83b2d62669";
export const url=new URL("../icons/phone_missed-fill.svg?v=8f720a92496171c01ba987a0805a4f182adfe72e4bbf248675d24c4c02680947",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
