export const name="cruelty_free-fill";
export const id="dl_ab03d13160a6fa8324a6";
export const url=new URL("../icons/cruelty_free-fill.svg?v=5311d559fd79d1ec267b084a2828055b66264abab9d0b742f17b334489204aa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
