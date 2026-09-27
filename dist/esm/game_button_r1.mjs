export const name="game_button_r1";
export const id="dl_09764d8bd23d71863ac9";
export const url=new URL("../icons/game_button_r1.svg?v=24654da520de0306105cfc25956e44f8c706fbc452e1cc5ea965626177eee1da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
