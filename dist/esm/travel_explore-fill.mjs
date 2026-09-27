export const name="travel_explore-fill";
export const id="dl_995a63a86e237a1c96c5";
export const url=new URL("../icons/travel_explore-fill.svg?v=ea71deeab82182820bf66cd835f09f90a42acd3f16e0b4347e3fe579f9d87415",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
