export const name="game_button_r-fill";
export const id="dl_0fce45d1d21608a60941";
export const url=new URL("../icons/game_button_r-fill.svg?v=98061cd8028d02d4d474ccb5a2e114e6873d73b7780d198329a0bfd7061dda84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
