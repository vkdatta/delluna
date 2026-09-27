export const name="videogame_asset_off-fill";
export const id="dl_0d02873bedc9c29c6082";
export const url=new URL("../icons/videogame_asset_off-fill.svg?v=605d5d605dab0cbad9b3b8f71fab95d091fe69ca23901fe6342bdd5e14322206",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
