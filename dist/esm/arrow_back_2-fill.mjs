export const name="arrow_back_2-fill";
export const id="dl_285fb23198894f2d9a78";
export const url=new URL("../icons/arrow_back_2-fill.svg?v=d87b863ea3f276f3edee4cddb9bff5848b78f83301ec340608c1cfaa3c8686ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
