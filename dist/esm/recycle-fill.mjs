export const name="recycle-fill";
export const id="dl_654c3bee45984d9ea2d6";
export const url=new URL("../icons/recycle-fill.svg?v=21afce735f46580885d932df643d7ac9b773be9691df0d2aab6d114480a69fb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
