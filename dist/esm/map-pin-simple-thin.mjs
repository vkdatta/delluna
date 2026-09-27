export const name="map-pin-simple-thin";
export const id="dl_a689e18e41ed42aa9bae";
export const url=new URL("../icons/map-pin-simple-thin.svg?v=8e49e9d22f2fa00018fb67158c1607a2013e84f51b491dc2ae45c3e6a79584da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
