export const name="game_bumper_right-fill";
export const id="dl_98cc0ba2db38c50dc1b7";
export const url=new URL("../icons/game_bumper_right-fill.svg?v=f11c6bfff98f3e2dd16798d3fbfbefc4f27029e4d571f7fc7652e87fbfae089f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
