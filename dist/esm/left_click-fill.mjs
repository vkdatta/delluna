export const name="left_click-fill";
export const id="dl_cdda0a0fa1d54feab894";
export const url=new URL("../icons/L/left_click-fill.svg?v=1706d583c2b7bb9ae9a88a1952a58aecd30a408b09b9731da9b3b3b627f3ee84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
