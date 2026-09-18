export const name="game_button_zr";
export const id="dl_578d8e6ea823463bbbc6";
export const url=new URL("../icons/game_button_zr.svg?v=3da11c11fc3adfefcee52a4db0d4aea620a3b3eef6fc847d1d26118d1a63b25b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
