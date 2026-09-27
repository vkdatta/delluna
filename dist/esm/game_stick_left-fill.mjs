export const name="game_stick_left-fill";
export const id="dl_9c13b49c2961f5449c8d";
export const url=new URL("../icons/game_stick_left-fill.svg?v=fccc0e5b7b2b142a8c682bf4877089f9faf97c51172f8ecc278d8056699b60b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
