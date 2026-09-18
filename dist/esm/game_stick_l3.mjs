export const name="game_stick_l3";
export const id="dl_fb7b2a7dfb184a23a0f2";
export const url=new URL("../icons/G/game_stick_l3.svg?v=0c177edc2fae3c465db2f2e071a12462fe769fb33adfaec69f5d1ca98aab4455",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
