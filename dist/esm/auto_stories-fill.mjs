export const name="auto_stories-fill";
export const id="dl_1b0d1b8159efdd517e1e";
export const url=new URL("../icons/auto_stories-fill.svg?v=8ddef4886e240e478854067ef4d3eb6542de15f5a75ca75f484a728fcf96748c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
