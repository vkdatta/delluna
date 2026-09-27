export const name="music-notes-minus-thin";
export const id="dl_0fcb7e068ac94942a177";
export const url=new URL("../icons/music-notes-minus-thin.svg?v=516b6ada5d18095ee4de67fca4ececac60925b010398d4c08d22a00b62e4e907",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
