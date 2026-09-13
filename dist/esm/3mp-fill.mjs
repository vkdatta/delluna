export const name="3mp-fill";
export const id="dl_f48de2559db6442c9eb3";
export const url=new URL("../icons/3/3mp-fill.svg?v=1210d4145e4e4e70640dd6d6363b1a5c0bee5369600584fbe6d7d904012f1368",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
