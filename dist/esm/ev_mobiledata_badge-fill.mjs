export const name="ev_mobiledata_badge-fill";
export const id="dl_ee4bbcf6f77e682eaa08";
export const url=new URL("../icons/ev_mobiledata_badge-fill.svg?v=faf9f61c98c73c1432f9f16275b7da73a2df0aac17719539eac04c020eb0c385",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
