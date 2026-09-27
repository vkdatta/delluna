export const name="hive";
export const id="dl_fe6342e1a8dc99988769";
export const url=new URL("../icons/hive.svg?v=19acb82270e5d718afe06b27df0925ef01aa0ac1241115cc03bd9f3e3913d821",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
