export const name="game_stick_r3";
export const id="dl_99678148d548cfe23d99";
export const url=new URL("../icons/game_stick_r3.svg?v=13970b68016b139b8c4a7bf486ca1c09cc651fc2d6447f5a226c6215bbe345d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
