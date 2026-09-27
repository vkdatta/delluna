export const name="music_note_add";
export const id="dl_f6f2aae6a2412d372bf4";
export const url=new URL("../icons/music_note_add.svg?v=40f801a2026cb17565047cc4685bc1df9f14dd9ba05c3131d4e16d11b08f3e50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
