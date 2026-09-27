export const name="sticker_add";
export const id="dl_9c37f3280dfd7f6a2fec";
export const url=new URL("../icons/sticker_add.svg?v=36a958d6c26664ab50fcd606f984dc8d1bdf6333d7e92751d402a45c44137d6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
