export const name="tile_medium";
export const id="dl_005c82542bafc20379bd";
export const url=new URL("../icons/tile_medium.svg?v=02e71cf282f94b05253252250a7e2a72cd91b924f499652548508206885a84ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
