export const name="map-pin-simple-light";
export const id="dl_ce35cd7770dd4f90ab87";
export const url=new URL("../icons/map-pin-simple-light.svg?v=3c27d7ecaecbf22166bf8029e26bf1870a7a121bb2b83fb1c8a896f2c93b6d1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
