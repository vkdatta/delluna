export const name="map_search";
export const id="dl_e586d8438ed6a5ae8c06";
export const url=new URL("../icons/map_search.svg?v=da2d09932c0471feb93e7bdc8e7bf26d064add8137c8e50959925c69520a9ea4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
