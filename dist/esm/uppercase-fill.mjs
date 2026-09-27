export const name="uppercase-fill";
export const id="dl_f378c25bed1c65bc475e";
export const url=new URL("../icons/uppercase-fill.svg?v=59bc88b66f3cf940fe4ec85a6c4408b922260a6885347cd0bf418f967c1aaa52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
