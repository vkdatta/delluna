export const name="map-pin-plus";
export const id="dl_912a092deb664e9da819";
export const url=new URL("../icons/map-pin-plus.svg?v=77beea0674ef5aed995189184469f380f153c3fba0eaa450a4ad3f36829428ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
