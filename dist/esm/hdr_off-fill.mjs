export const name="hdr_off-fill";
export const id="dl_afa56b5de8e7447e9efc";
export const url=new URL("../icons/hdr_off-fill.svg?v=1fc3a142997dcdfc8e734a5d3958301b759c4637831a832720951fd81e2d8702",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
