export const name="map-pin-area-duotone";
export const id="dl_c3d23d4ff3bb4d5684ad";
export const url=new URL("../icons/map-pin-area-duotone.svg?v=4efdabfa8649ea430289b330325e53634f6777e1f30a3b725ab847eb64e8ed68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
