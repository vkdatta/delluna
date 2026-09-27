export const name="videogame_asset_off-fill";
export const id="dl_c6d281f73eaef76c8baf";
export const url=new URL("../icons/videogame_asset_off-fill.svg?v=43249f22aea47f9abdc12fff4467aa909f5c6b1662b58116d9d92a3b1deca2d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
