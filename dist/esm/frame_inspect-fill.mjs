export const name="frame_inspect-fill";
export const id="dl_e568abc1b20460ab632c";
export const url=new URL("../icons/frame_inspect-fill.svg?v=40d986db2115b44ee856b1bd498c123ca76370a336e2a89e26a46cfaab18a423",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
