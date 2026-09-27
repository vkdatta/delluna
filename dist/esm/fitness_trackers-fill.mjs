export const name="fitness_trackers-fill";
export const id="dl_4f33f6aa9cbacf53be7d";
export const url=new URL("../icons/fitness_trackers-fill.svg?v=b6ee09ac22e82dcbcd3f6a7f5c8fdcca22a45abbafbfae26a82fafbd498d989d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
