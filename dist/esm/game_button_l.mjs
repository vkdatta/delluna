export const name="game_button_l";
export const id="dl_356c32c60d7040ba8cd0";
export const url=new URL("../icons/game_button_l.svg?v=0ffd922e999a959c623b852a3e6ee8002ca0d2c9dbc175e3e60d49e4fbb8ef62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
