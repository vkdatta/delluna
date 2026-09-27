export const name="game_trigger_left";
export const id="dl_2206147598607ebc2374";
export const url=new URL("../icons/game_trigger_left.svg?v=33b74395cb8542fa95fe7966c1d1aa34f6f508a4a031ac967c0049b693135bac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
