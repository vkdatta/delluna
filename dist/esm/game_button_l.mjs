export const name="game_button_l";
export const id="dl_e943a71d9734616f0835";
export const url=new URL("../icons/game_button_l.svg?v=70e8d3dd9613f9540f3b821ce26d56fc66967af1c4eaf2a0f980eac032e0c567",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
