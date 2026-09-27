export const name="map-pin-simple-thin";
export const id="dl_a689e18e41ed42aa9bae";
export const url=new URL("../icons/map-pin-simple-thin.svg?v=32cac892e5df25a3d73eeaa681180ef31c6fc86e9228c5c56b3886a7ba5ce9d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
