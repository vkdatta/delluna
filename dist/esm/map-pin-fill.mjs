export const name="map-pin-fill";
export const id="dl_db541a1a16a749d0bfab";
export const url=new URL("../icons/map-pin-fill.svg?v=cdf9716cc57a4f6dfcedd9a4697bd64badc4c2562317f420c152d20a06d00a3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
