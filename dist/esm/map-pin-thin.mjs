export const name="map-pin-thin";
export const id="dl_32bb05b55af242ecb70d";
export const url=new URL("../icons/map-pin-thin.svg?v=cec5524f36bd6141283ac4ec1c61ff62a55a7ba43718121eada62a877a4ec44b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
