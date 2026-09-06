export const name="music-notes";
export const id="dl_b1a43de47f8441c2a833";
export const url=new URL("../icons/music-notes.svg?v=b991d76e24e781b864f9ad8b7aa14e516d4fd851871a979928917e20d492eca0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
