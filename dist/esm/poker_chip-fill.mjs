export const name="poker_chip-fill";
export const id="dl_825b910786d5c42541c1";
export const url=new URL("../icons/poker_chip-fill.svg?v=ee8485db6388d71835c8d9817d15b2d96aac7b24898b8abe19426fb6691294fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
