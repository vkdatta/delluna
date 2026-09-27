export const name="music-notes-simple-thin";
export const id="dl_b6ad9ccbf3b94abd93e5";
export const url=new URL("../icons/music-notes-simple-thin.svg?v=6a2e6523ac5f5cb74e609f68c249fc02b1e6282c057bb13a29d4de2f3f32f2dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
