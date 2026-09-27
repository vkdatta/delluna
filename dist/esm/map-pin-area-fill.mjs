export const name="map-pin-area-fill";
export const id="dl_78e3506e86a54d7ba46c";
export const url=new URL("../icons/map-pin-area-fill.svg?v=019c07899be5a2737db008ed849a9cf31db33eef883f8439946982879a39d4af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
