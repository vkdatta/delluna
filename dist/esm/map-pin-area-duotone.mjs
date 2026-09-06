export const name="map-pin-area-duotone";
export const id="dl_c3d23d4ff3bb4d5684ad";
export const url=new URL("../icons/map-pin-area-duotone.svg?v=4917859ce56f1f57b1e814fcb2e9d93b4b3da1b50c80add958e5b8672be11dc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
