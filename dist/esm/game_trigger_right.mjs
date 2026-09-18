export const name="game_trigger_right";
export const id="dl_8abfc931caed42a98145";
export const url=new URL("../icons/G/game_trigger_right.svg?v=20f57b4d44e5a4b5a3712d8917ab187aa0dd98ed0b6b91c614cd617e4cb800ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
