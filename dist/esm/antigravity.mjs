export const name="antigravity";
export const id="dl_009c6687b66b1548c159";
export const url=new URL("../icons/antigravity.svg?v=18e386555713d62d7c8c5b921e9fc7be177560d3d99c7b69c120b6028e16d9bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
