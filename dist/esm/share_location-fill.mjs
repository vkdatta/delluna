export const name="share_location-fill";
export const id="dl_c805129acfef3a44a346";
export const url=new URL("../icons/share_location-fill.svg?v=8c498b594c0fb37aca0ae2467189f444e62c1d7318212fca4621eb392b51e010",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
