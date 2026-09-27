export const name="videogame_asset_off-fill";
export const id="dl_8307c175d2d60aa04d97";
export const url=new URL("../icons/videogame_asset_off-fill.svg?v=514beb6f53cc7850fbb96319a6ff36c9fb53c58a7ad642e03e63ed24814b6995",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
