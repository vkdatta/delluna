export const name="game_trigger_right";
export const id="dl_fe7640fcf6ea27f872d6";
export const url=new URL("../icons/game_trigger_right.svg?v=f8c9cb935a1122b6d39ff4d9a1c033c3f0d5c2c64855d7234fc3f1d0fa1ac4ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
