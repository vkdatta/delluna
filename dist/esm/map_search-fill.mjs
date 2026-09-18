export const name="map_search-fill";
export const id="dl_47431336bfcb4e46bed9";
export const url=new URL("../icons/map_search-fill.svg?v=89c0f6bd2d9b5da167095b4267445a22010006d238be852d4b2fc1ccf59b2a5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
