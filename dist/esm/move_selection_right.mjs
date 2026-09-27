export const name="move_selection_right";
export const id="dl_fac4b345b3d98e11d0cb";
export const url=new URL("../icons/move_selection_right.svg?v=626a2e1dc3022ee7b82e105edc3416efcc8bb13c6c1411853692c713268ecb35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
