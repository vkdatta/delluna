export const name="filter_frames";
export const id="dl_5e33c66ff5a03a97b905";
export const url=new URL("../icons/filter_frames.svg?v=dd381be23b095cd81620e23a7502ab981e2c0ef971c1aed29028ef2f4937142b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
