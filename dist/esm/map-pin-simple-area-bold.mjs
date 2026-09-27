export const name="map-pin-simple-area-bold";
export const id="dl_5eab8dceda234122967d";
export const url=new URL("../icons/map-pin-simple-area-bold.svg?v=6dc10036e3bb214e82fba2ca3d2b5c5d772d8e08fd4d73a8e6b48af7b372f187",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
