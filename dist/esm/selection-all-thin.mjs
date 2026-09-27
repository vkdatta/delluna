export const name="selection-all-thin";
export const id="dl_03401dcfdfcbf486bc67";
export const url=new URL("../icons/selection-all-thin.svg?v=2558ae9a1b122c06943d84c704d3d4cc7c64d3f9dcfef9a13f0fc82efe1b1a27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
