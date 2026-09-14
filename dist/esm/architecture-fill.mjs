export const name="architecture-fill";
export const id="dl_229ba0a7957844e7ad75";
export const url=new URL("../icons/A/architecture-fill.svg?v=96cf95a8721a33595381dc64a09ade5ebeac02bd43aa31bd39ff64f773c43de8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
