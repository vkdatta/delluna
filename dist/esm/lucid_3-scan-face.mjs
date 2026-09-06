export const name="lucid_3-scan-face";
export const id="dl_ce2a00f053054062862a";
export const url=new URL("../icons/lucid_3-scan-face.svg?v=1a7b8d3f3dd9ff8144349bfaa2cd4a9a5c46fe287c310e1f0f32e5eae579d7e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
