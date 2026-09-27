export const name="share_location-fill";
export const id="dl_d7aa0fd8c7f0a6480f29";
export const url=new URL("../icons/share_location-fill.svg?v=511f9f7572a29fc18fe597fb7d7b07cf1d615f0cced922be072de895101d7e24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
