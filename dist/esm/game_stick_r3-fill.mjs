export const name="game_stick_r3-fill";
export const id="dl_a7c979d10682155a7edb";
export const url=new URL("../icons/game_stick_r3-fill.svg?v=98c52cfcc8db7c95b7ce1feaf724a2b277c412d0be72732f8232883f5d4b68d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
