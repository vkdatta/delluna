export const name="music-note-thin";
export const id="dl_c147c250f32443df92db";
export const url=new URL("../icons/music-note-thin.svg?v=1c50c0f701feb2abdc6fa5ab05a4b6f55a2b71b37bb57abaaac62631d02f1b13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
