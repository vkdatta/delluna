export const name="map-pin-simple-area-duotone";
export const id="dl_6322e26a351c4028ba32";
export const url=new URL("../icons/map-pin-simple-area-duotone.svg?v=19981c30d7b4f85fbc319ca148cfe67ba75ea2b50e126b95dafdb4c3e754f588",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
