export const name="4g_mobiledata_badge-fill";
export const id="dl_b478bd0a57a24d82ab58";
export const url=new URL("../icons/4g_mobiledata_badge-fill.svg?v=bcdb846b5ea6f48960ffd15ad5626037befc9b5ebd2399be83ba7ec45b0bbbcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
