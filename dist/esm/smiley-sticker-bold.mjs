export const name="smiley-sticker-bold";
export const id="dl_f131d79ed30b47b0bed4";
export const url=new URL("../icons/S/smiley-sticker-bold.svg?v=e247fc272a7fa53c6fb4afaa7ff9c29a1a228d911e0a9f3d6a38c2c44aa18cea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
