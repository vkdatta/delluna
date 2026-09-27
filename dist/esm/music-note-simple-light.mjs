export const name="music-note-simple-light";
export const id="dl_9f21c030d2724281803a";
export const url=new URL("../icons/music-note-simple-light.svg?v=829baca2a81e5225dd9172e5a4ec698ad639eb4f18697a93b7bb688079c8f693",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
