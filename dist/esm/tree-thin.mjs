export const name="tree-thin";
export const id="dl_cee1959cadf01cfae0dc";
export const url=new URL("../icons/tree-thin.svg?v=5e1aa047a838a80c92732e703bf26204e7bfb59f295e428ed15407dfb4ce95a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
