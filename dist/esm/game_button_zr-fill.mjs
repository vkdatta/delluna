export const name="game_button_zr-fill";
export const id="dl_74dc3649068162be2e4e";
export const url=new URL("../icons/game_button_zr-fill.svg?v=ad56324189922c6e9e6ecee5ea2d74ce0689418042dad7ef5276fb7f793f382f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
