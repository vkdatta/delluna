export const name="game_button_r2-fill";
export const id="dl_a10ad69a22e14d14a1f5";
export const url=new URL("../icons/game_button_r2-fill.svg?v=1ccd1b8f13decc96aff003556a383dd5ddf4af3135dbb0bc10f77f73be9f2228",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
