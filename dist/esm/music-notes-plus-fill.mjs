export const name="music-notes-plus-fill";
export const id="dl_f6ffc4a7637948bc9d58";
export const url=new URL("../icons/music-notes-plus-fill.svg?v=1c07c754cf6801fa3016d8c0a44d631dffe024482a12e158f4b0c26304e529a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
