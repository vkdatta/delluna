export const name="carrot-fill";
export const id="dl_3797fb6ac7214d2e81ee";
export const url=new URL("../icons/carrot-fill.svg?v=6fb9f572f168d1b9578db03130f8389fe145f6920f142f55421643fb222c646e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
