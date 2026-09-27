export const name="game_trigger_right-fill";
export const id="dl_90b995c65006f50a7555";
export const url=new URL("../icons/game_trigger_right-fill.svg?v=55712a453760dc214a4b02885985a760a0bf80d7d1745681985d67b4f0880611",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
