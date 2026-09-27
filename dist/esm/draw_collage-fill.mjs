export const name="draw_collage-fill";
export const id="dl_14d2a5d0683d984dae6c";
export const url=new URL("../icons/draw_collage-fill.svg?v=f34df18280b415fbc131949c3834d31f915c99ae1e38e9b3aa6722ebe8bb37eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
