export const name="game_trigger_right";
export const id="dl_2bbfa2d344f7e860e963";
export const url=new URL("../icons/game_trigger_right.svg?v=cfe01ace11c605c089b4118de5633fe9093ac411c56e2a4d018c7935225eee4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
