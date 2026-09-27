export const name="smoke_free-fill";
export const id="dl_9dfb1ecd6532db344c8b";
export const url=new URL("../icons/smoke_free-fill.svg?v=5d533fb93ebe3d0b97f1ee8da172b20540893dbd9b75a116b8525eea049aabcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
