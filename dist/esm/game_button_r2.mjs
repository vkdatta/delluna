export const name="game_button_r2";
export const id="dl_a46fac6098b2f4889f59";
export const url=new URL("../icons/game_button_r2.svg?v=cfde835d4887ded8b92fda66c27650e8132266694753001adcd68cb682c6a243",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
