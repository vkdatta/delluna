export const name="game_bumper_right";
export const id="dl_364f1154d66d01a01f00";
export const url=new URL("../icons/game_bumper_right.svg?v=339a0f49302d083ab2c3e89d584fe78060bca3e5146a2804632cd2eabeb5f8d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
