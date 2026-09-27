export const name="music-notes-minus-light";
export const id="dl_55bde10137b24b3ea01f";
export const url=new URL("../icons/music-notes-minus-light.svg?v=2e10df987d8402984a8481ee78978f1e7e46e494b309255f0db32cab043be437",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
