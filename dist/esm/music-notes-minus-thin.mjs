export const name="music-notes-minus-thin";
export const id="dl_0fcb7e068ac94942a177";
export const url=new URL("../icons/music-notes-minus-thin.svg?v=64ababe0c10968fec98a5bb79781e0a5570ead5f4a46cd900322afdcb335fe16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
