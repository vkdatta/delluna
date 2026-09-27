export const name="map-pin-area-bold";
export const id="dl_7ff7d47579394ce08320";
export const url=new URL("../icons/map-pin-area-bold.svg?v=cb0fe5b2d265c5c06d43ebda1e5916ce36efa1a3fa2fd7a8532e5f9c80029e3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
