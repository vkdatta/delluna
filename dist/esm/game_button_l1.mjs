export const name="game_button_l1";
export const id="dl_10e109951f692a496943";
export const url=new URL("../icons/game_button_l1.svg?v=b4f103c0bf15dcfe880d159409e7559db12be773dd42a95a59b67f6df7b199fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
