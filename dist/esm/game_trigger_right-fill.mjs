export const name="game_trigger_right-fill";
export const id="dl_c3154082cc471860bf95";
export const url=new URL("../icons/game_trigger_right-fill.svg?v=2ffc5d63335f6a89dc3062709c5cd2d34a089943c2ef1b176d934dd9d80f60e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
