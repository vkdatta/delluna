export const name="music_note_add";
export const id="dl_1b4340ca944c4d43a3ab";
export const url=new URL("../icons/music_note_add.svg?v=91b9be40a466af8e98e9589855d7b6b5cd06c5d4c890abdfa609430f13b78b2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
