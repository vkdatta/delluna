export const name="game_button_l2";
export const id="dl_e8c8daf1fc57f976665b";
export const url=new URL("../icons/game_button_l2.svg?v=c0bd3fe09a1366e4ef96dd9657450c8913ce3aeb7eaa55dc7e0bbfebb2889a52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
