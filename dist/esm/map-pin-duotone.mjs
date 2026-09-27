export const name="map-pin-duotone";
export const id="dl_0bc5ac29f9ec439b8539";
export const url=new URL("../icons/map-pin-duotone.svg?v=f7005b15b82e72a65fce933139219bb1f6c4b1d4f440f396d8878c9ab0839e39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
