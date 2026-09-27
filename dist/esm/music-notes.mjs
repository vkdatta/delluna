export const name="music-notes";
export const id="dl_b1a43de47f8441c2a833";
export const url=new URL("../icons/music-notes.svg?v=5d15fca21109b3d9ad8dd7f6fa3d93c78935d97f396b02137818912443f87679",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
