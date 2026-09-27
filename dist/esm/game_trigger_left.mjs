export const name="game_trigger_left";
export const id="dl_113d41fdc94129b37e64";
export const url=new URL("../icons/game_trigger_left.svg?v=eb894b5c903cadbaf46c0c6bef5bab7893343a7c7a1fc7b64fd520b1763ec0b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
