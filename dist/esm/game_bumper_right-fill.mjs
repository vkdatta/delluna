export const name="game_bumper_right-fill";
export const id="dl_397c49b516561a9f6f8e";
export const url=new URL("../icons/game_bumper_right-fill.svg?v=6a39e114d0bb5ad6fc338c8d0736ea93704e718212d0b5b492faf3035c8a79ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
