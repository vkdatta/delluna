export const name="music-note-duotone";
export const id="dl_fc8fb87a20b145c89e79";
export const url=new URL("../icons/music-note-duotone.svg?v=70477d5874bf01414c86e20736488e16f5ca80812927016d483d83925649762b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
