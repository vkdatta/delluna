export const name="travel_luggage_and_bags-fill";
export const id="dl_a30bdcd04258491982ef";
export const url=new URL("../icons/T/travel_luggage_and_bags-fill.svg?v=3a2e9cbbc9f96c50e45a6f19e95c3d06546edadf5bbe433f925d8f88391ab784",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
