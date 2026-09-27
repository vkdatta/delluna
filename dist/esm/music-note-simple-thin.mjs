export const name="music-note-simple-thin";
export const id="dl_9b2aa91d43e947eebfcd";
export const url=new URL("../icons/music-note-simple-thin.svg?v=55a93f322be60cad7cbdc76c3113931f56b949c200a73e357d15ef3df3116801",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
