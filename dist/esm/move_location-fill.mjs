export const name="move_location-fill";
export const id="dl_998be4f9b840ac2aac9c";
export const url=new URL("../icons/move_location-fill.svg?v=6b382f1061e3b9c7c6eed1a98beccde02c1ec7a96cc4b732d90b94ea714b617e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
