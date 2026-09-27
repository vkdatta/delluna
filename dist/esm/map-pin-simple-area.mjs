export const name="map-pin-simple-area";
export const id="dl_fb22d637114c4eb89a54";
export const url=new URL("../icons/map-pin-simple-area.svg?v=24d9e1b8dc070dff43c9264c70064d7990160e433905fe7312715018a3740b9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
