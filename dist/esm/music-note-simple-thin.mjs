export const name="music-note-simple-thin";
export const id="dl_9b2aa91d43e947eebfcd";
export const url=new URL("../icons/music-note-simple-thin.svg?v=985a63a39fd7836e1e064583abc11338dd38e27940568d7e2d2b2e8976548518",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
