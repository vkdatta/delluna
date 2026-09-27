export const name="music-notes-duotone";
export const id="dl_4a857ecf86a04f56b629";
export const url=new URL("../icons/music-notes-duotone.svg?v=5fff432ec53c610c9f3cf81181070d0ac6481cc2860675798bc7ffbb540dcf69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
