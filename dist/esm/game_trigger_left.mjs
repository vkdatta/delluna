export const name="game_trigger_left";
export const id="dl_c354d777c3e900e62283";
export const url=new URL("../icons/game_trigger_left.svg?v=5db472d4a4a781577b2832959960345df727ec08c88a1be10f2d837cdf11604b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
