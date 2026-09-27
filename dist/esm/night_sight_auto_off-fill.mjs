export const name="night_sight_auto_off-fill";
export const id="dl_90dbdfe7202b169f5e03";
export const url=new URL("../icons/night_sight_auto_off-fill.svg?v=57e7291c388f39230e9b3152e164e41a14145ed519ddd2ee3f9b2146452e6865",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
