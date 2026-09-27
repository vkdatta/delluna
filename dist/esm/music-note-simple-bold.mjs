export const name="music-note-simple-bold";
export const id="dl_ea1b2aa8ef2745e5b1db";
export const url=new URL("../icons/music-note-simple-bold.svg?v=c467db2d99c048164ef200a0fbf8143b8180de552bd618525f036a886039dcce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
