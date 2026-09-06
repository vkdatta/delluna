export const name="music-note-thin";
export const id="dl_c147c250f32443df92db";
export const url=new URL("../icons/music-note-thin.svg?v=bde299ba571c24ad1bd6ea6116eb84ea9d8d809821193cd8b840ba062e2ed763",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
