export const name="smiley-sticker-fill";
export const id="dl_ce4519290791b74e3003";
export const url=new URL("../icons/smiley-sticker-fill.svg?v=a7e9d06634939ab07f2bb1189e692bd831b0602d746305c92c35df6153413737",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
