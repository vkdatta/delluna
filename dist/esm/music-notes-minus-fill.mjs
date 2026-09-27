export const name="music-notes-minus-fill";
export const id="dl_cde615f26a1d4fccaf24";
export const url=new URL("../icons/music-notes-minus-fill.svg?v=7cc2a9eb37a4948ec420f3f82de53843a45e52fe205a3e1682f4840f363646f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
