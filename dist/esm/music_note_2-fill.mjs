export const name="music_note_2-fill";
export const id="dl_ad2020c8b35edfa99dd6";
export const url=new URL("../icons/music_note_2-fill.svg?v=a6d5bc75c95ba627a021cf9e8fc3edc528573326362212f4a5519e8f5a86d90a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
