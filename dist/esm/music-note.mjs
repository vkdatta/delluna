export const name="music-note";
export const id="dl_cbe2cbdf655c432eb346";
export const url=new URL("../icons/music-note.svg?v=31db163435a48de625c43b51453888a6c0808bc798964ac741406d738cdb5541",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
