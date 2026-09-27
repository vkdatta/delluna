export const name="pan_tool";
export const id="dl_d866f86e50b7ee6db69b";
export const url=new URL("../icons/pan_tool.svg?v=b9644460d0edd02d3cf19773ead83cf57699b072a0aa6c3335db4e98af52d358",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
