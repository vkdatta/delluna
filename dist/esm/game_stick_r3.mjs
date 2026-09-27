export const name="game_stick_r3";
export const id="dl_d822ec1ef2ce101d100f";
export const url=new URL("../icons/game_stick_r3.svg?v=91a939614881c6e21dde40bed61633d2f1fc7db7d14fbf2fe917cc585e8dac76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
