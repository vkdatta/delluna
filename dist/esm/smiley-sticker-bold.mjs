export const name="smiley-sticker-bold";
export const id="dl_75012f679f566525a60a";
export const url=new URL("../icons/smiley-sticker-bold.svg?v=d4468b6b19197fb5d27251be1a2d07a20d486a9606b2f4b13ceee65adaeccb26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
