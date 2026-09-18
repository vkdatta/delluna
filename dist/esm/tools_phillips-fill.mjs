export const name="tools_phillips-fill";
export const id="dl_022a43d24d64412886c1";
export const url=new URL("../icons/tools_phillips-fill.svg?v=6899d1cd76e1e14abf98ff1d49fe17294d7656eca0742f49e778632f56711210",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
