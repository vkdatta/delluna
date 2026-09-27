export const name="archive-bold";
export const id="dl_0c0da38bc1af4aa7a58d";
export const url=new URL("../icons/archive-bold.svg?v=0ddc8ad79e34c13c85bfa9ba8fef65789cf6b8badd4ea65d194ee2e4457d2af0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
