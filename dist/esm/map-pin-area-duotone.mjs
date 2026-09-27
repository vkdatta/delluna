export const name="map-pin-area-duotone";
export const id="dl_c3d23d4ff3bb4d5684ad";
export const url=new URL("../icons/map-pin-area-duotone.svg?v=1fac6ae9dbdd26d89dffe98c7fe33a0c77b8f8cfef9904cc485ff29c0f8a55f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
