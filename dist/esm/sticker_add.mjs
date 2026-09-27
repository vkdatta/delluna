export const name="sticker_add";
export const id="dl_add4afd4ee7365701ed9";
export const url=new URL("../icons/sticker_add.svg?v=c09b120d20af4164d6efeb3f8ede68466c3739ef753bccc915e28d28475ffc19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
