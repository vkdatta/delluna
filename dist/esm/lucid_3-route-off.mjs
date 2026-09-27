export const name="lucid_3-route-off";
export const id="dl_fb292dc77a894ba68158";
export const url=new URL("../icons/lucid_3-route-off.svg?v=216357afb78ee7a18576e24c308ab0a0f23b1fbc37d274da0578abf416150631",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
