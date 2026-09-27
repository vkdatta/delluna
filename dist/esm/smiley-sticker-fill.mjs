export const name="smiley-sticker-fill";
export const id="dl_277b5769ab8debdd1e13";
export const url=new URL("../icons/smiley-sticker-fill.svg?v=2fc95a8e353ab860678d7ea2150a6870c65bd4ebe4334be338a0bdeb548a4ce6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
