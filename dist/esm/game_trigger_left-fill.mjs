export const name="game_trigger_left-fill";
export const id="dl_be23a5d313db6ecf1298";
export const url=new URL("../icons/game_trigger_left-fill.svg?v=a16e790d22ef994b1f64a1d27853ca533d24313d9db76b6c960a052a2a93e301",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
