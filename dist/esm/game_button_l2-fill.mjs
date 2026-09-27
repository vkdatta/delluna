export const name="game_button_l2-fill";
export const id="dl_8e7256e81d83c6274044";
export const url=new URL("../icons/game_button_l2-fill.svg?v=6149ca8845bf829dc03d2fabbd82edc74f58935f4fe2d821ee81c96081c7b892",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
