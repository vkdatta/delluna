export const name="music-notes-plus-thin";
export const id="dl_15119490ebde4a93a1ba";
export const url=new URL("../icons/music-notes-plus-thin.svg?v=6d8e47a0dc44a3534fa643185d57bf2808cae2458b692a408deb1b60451b7730",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
