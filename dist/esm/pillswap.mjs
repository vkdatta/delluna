export const name="pillswap";
export const id="dl_ea5d6a919b77457eb8a5";
export const url=new URL("../icons/pillswap.svg?v=879786e1aec6b3f2385ac06b9259cb619a1a4e014dcd311b037ec6936c055f7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
