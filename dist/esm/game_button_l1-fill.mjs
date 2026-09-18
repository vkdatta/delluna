export const name="game_button_l1-fill";
export const id="dl_96eeb53ddb574556989a";
export const url=new URL("../icons/G/game_button_l1-fill.svg?v=02b8308b11681b59240cac002e57bbe728b8a1403c6d6acc9910e33550ee9091",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
