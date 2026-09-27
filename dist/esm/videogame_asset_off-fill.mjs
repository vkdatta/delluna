export const name="videogame_asset_off-fill";
export const id="dl_aadb4ffb875043dec68a";
export const url=new URL("../icons/videogame_asset_off-fill.svg?v=49616ce0108fcd9f6c861105973aed0b030da314310bfb392645751559d14d53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
