export const name="sentiment_neutral-fill";
export const id="dl_860d05dce31744be90b2";
export const url=new URL("../icons/S/sentiment_neutral-fill.svg?v=e78da35af2712ee95cfc809bececc5c42f2426c796473b39f1aae64938148063",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
