export const name="music-note-simple-light";
export const id="dl_9f21c030d2724281803a";
export const url=new URL("../icons/music-note-simple-light.svg?v=c90d6e47f73f64e98de392770b02e07e5f1de2701091793708dda8a6199a1533",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
