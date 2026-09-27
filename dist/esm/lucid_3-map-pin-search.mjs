export const name="lucid_3-map-pin-search";
export const id="dl_cbc6f09436e54304acad";
export const url=new URL("../icons/lucid_3-map-pin-search.svg?v=1a03cf7bb0d3301884bbb729b32d479d91b36b7277ceef2bf617afdb803d0bd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
