export const name="game_bumper_left-fill";
export const id="dl_92ed8e240b47430f959d";
export const url=new URL("../icons/G/game_bumper_left-fill.svg?v=3346ac63f118032d12576441484335651e92439af256576d40f6a13f60a9e4ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
