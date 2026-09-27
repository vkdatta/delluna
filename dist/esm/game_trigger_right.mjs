export const name="game_trigger_right";
export const id="dl_45eab3b4c194dd2bc861";
export const url=new URL("../icons/game_trigger_right.svg?v=71039c19993bf6fbfe2acbcc83001eadb68f450199656ac0cc52a76adc9590d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
