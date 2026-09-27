export const name="map-pin-plus-light";
export const id="dl_317f48d3d15149a5b970";
export const url=new URL("../icons/map-pin-plus-light.svg?v=334afe55300d0ab9f6ef30f994196341d85f1339824598ed41ff6db6d46e0af1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
