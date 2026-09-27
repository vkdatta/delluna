export const name="music-note-simple-bold";
export const id="dl_ea1b2aa8ef2745e5b1db";
export const url=new URL("../icons/music-note-simple-bold.svg?v=ee49ed28a1eddb508068aeb2f73c922ebb51e1032dbb5277cad9eea9b35c5e46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
