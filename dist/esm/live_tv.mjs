export const name="live_tv";
export const id="dl_69aae8f0b98a22ecb57f";
export const url=new URL("../icons/live_tv.svg?v=3b29636b6b4a9be19597c20e1e603e41ccc13d78cc295e5d9fd7fee6f8220e69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
