export const name="move_item-fill";
export const id="dl_a78187944f630b9a1687";
export const url=new URL("../icons/move_item-fill.svg?v=7fe808bf2e96343580bb8f2d41885acf96b161e1462dabf27ce8a021657505c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
