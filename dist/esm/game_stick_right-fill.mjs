export const name="game_stick_right-fill";
export const id="dl_5c18579ccc3f311e8e24";
export const url=new URL("../icons/game_stick_right-fill.svg?v=ecb807758e4126b6c4a2d338673f981825849a71e68425883e1844f975687434",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
