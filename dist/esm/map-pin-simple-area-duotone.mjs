export const name="map-pin-simple-area-duotone";
export const id="dl_6322e26a351c4028ba32";
export const url=new URL("../icons/map-pin-simple-area-duotone.svg?v=5d839fbb91013a9c2336192880c18d9dd90259133d5a90be2a27c536f75c2f28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
