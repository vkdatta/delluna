export const name="game_stick_r3";
export const id="dl_8b638a86bbe510e4cc1d";
export const url=new URL("../icons/game_stick_r3.svg?v=da2d48c06522a7503cddd3f8bc090676c9802a28059f2b662ed11f964bde7e7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
