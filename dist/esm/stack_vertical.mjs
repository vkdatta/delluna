export const name="stack_vertical";
export const id="dl_5e7db544a9ca4e4d90ad";
export const url=new URL("../icons/all_60_named_svgs/stack_vertical.svg?v=7fd94404ed77403d1ea1ee8557ea4334ce0c8d622bbe4aae8923023391c21740",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
