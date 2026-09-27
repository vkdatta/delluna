export const name="music-notes-minus-fill";
export const id="dl_cde615f26a1d4fccaf24";
export const url=new URL("../icons/music-notes-minus-fill.svg?v=31833e3ed32728302815f5e86b230e1672c1f882caa30e2587504f4fec205566",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
