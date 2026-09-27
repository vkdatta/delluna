export const name="music-note";
export const id="dl_cbe2cbdf655c432eb346";
export const url=new URL("../icons/music-note.svg?v=8a9058e1afcd4145b30f34dda68c9c188be363911336a05bba5cadd7f1ec971b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
