export const name="map-pin-plus-bold";
export const id="dl_a871274480ea49b9b24a";
export const url=new URL("../icons/map-pin-plus-bold.svg?v=aa176f7a2473424c98bde7768d35ab33755d35ebbc3e29da823a8d9caf5a7a83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
