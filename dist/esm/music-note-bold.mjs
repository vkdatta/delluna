export const name="music-note-bold";
export const id="dl_50ff487b357c4c2e8e13";
export const url=new URL("../icons/music-note-bold.svg?v=2656bbe1295fc097a6f029148c45660c45186d6ccf7453d5968216a1f2e31c55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
