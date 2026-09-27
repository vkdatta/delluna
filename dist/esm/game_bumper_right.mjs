export const name="game_bumper_right";
export const id="dl_9ec821ad868f4afc609c";
export const url=new URL("../icons/game_bumper_right.svg?v=4544775fec8a994a5564d45b1a4edea6b3505ef2a76bf36d0b132dbcab0273b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
