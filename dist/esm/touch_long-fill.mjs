export const name="touch_long-fill";
export const id="dl_14f7f50748a34cd88ce1";
export const url=new URL("../icons/T/touch_long-fill.svg?v=21761c2b818f77ac3b5eeb170a5c68f6e0aae8ada248ead135c8c8b3bd9cb66e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
