export const name="music_note-fill";
export const id="dl_4c686be8a994cb974c75";
export const url=new URL("../icons/music_note-fill.svg?v=7b0f92ad384e1acf9d95052eab46f0421deb5c11d92a012515cfebbae9ed0494",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
