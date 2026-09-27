export const name="tv_off-fill";
export const id="dl_2fd4613fc53b94e06522";
export const url=new URL("../icons/tv_off-fill.svg?v=7c9cf121e41309d0707c905f6bdbc0943721a976dc939368378138f8d8239f54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
