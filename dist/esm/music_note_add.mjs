export const name="music_note_add";
export const id="dl_e5be2918121cb19dbce7";
export const url=new URL("../icons/music_note_add.svg?v=039276b4576e437b18830694ca34ea2b3a2e61b06a6d4746982b90d1ef7554a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
