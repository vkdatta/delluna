export const name="tile_large-fill";
export const id="dl_b191d47be44d6fc47022";
export const url=new URL("../icons/tile_large-fill.svg?v=8ccb3de8e21c88b19aaf46a052959ed5683a41bd036209686a95ae5cfab96034",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
