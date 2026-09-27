export const name="fmd_bad-fill";
export const id="dl_3220012885f57c05a7ab";
export const url=new URL("../icons/fmd_bad-fill.svg?v=cfec29a1c8ca80d58267aaff59274a66450b788d01696695ea1e877510018804",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
