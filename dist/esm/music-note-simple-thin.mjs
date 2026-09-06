export const name="music-note-simple-thin";
export const id="dl_9b2aa91d43e947eebfcd";
export const url=new URL("../icons/music-note-simple-thin.svg?v=a04ecce117b171d8441c4c64bdd72f3c235765e1a0882b84476b5d1d5e253b7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
