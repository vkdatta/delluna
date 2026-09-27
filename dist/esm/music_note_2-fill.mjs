export const name="music_note_2-fill";
export const id="dl_f13db96018eff4daaa2c";
export const url=new URL("../icons/music_note_2-fill.svg?v=c8c05b6a30ee26ee1ca43fd729f68f2eafa2b7736719d114851a6b5949840086",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
