export const name="surgical";
export const id="dl_d0f91acd595d3d304cf8";
export const url=new URL("../icons/surgical.svg?v=a557abe155af5caf940390621fda93075b12265a988d2822ff60ba567d106d9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
