export const name="map_search";
export const id="dl_83d6262e64624e8a8814";
export const url=new URL("../icons/map_search.svg?v=6d68ba3091b87ed1a63815b9822816defb035ec6c34b5d4c5e1f198d8d47f714",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
