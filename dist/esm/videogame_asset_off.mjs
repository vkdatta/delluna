export const name="videogame_asset_off";
export const id="dl_2856fb43b6fe2d0c747b";
export const url=new URL("../icons/videogame_asset_off.svg?v=09337a0073cfb446fbd0d4cae23ebe8f9c7964c2a8b907b79f99e160b3e1e1fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
