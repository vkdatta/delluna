export const name="videogame_asset-fill";
export const id="dl_4650b920ef6c4477accc";
export const url=new URL("../icons/videogame_asset-fill.svg?v=3fedf792d0b59d764f0ea68c38e45abfbd7deabb3e452d46b6445eaca223d4fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
