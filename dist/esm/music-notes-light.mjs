export const name="music-notes-light";
export const id="dl_e90759fdc8a24ced94e3";
export const url=new URL("../icons/music-notes-light.svg?v=db293a7c256dde69adf1ed4389f1a7bbf22e9c8b96659a4b5c2def02c62e0e34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
