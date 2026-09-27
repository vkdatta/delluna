export const name="music-note-bold";
export const id="dl_50ff487b357c4c2e8e13";
export const url=new URL("../icons/music-note-bold.svg?v=5595d0f86435b02fa62b0b8ac2b84dbbbcb31a634d480851c3eaa7d0a39ad26d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
