export const name="figma-logo-duotone";
export const id="dl_4c645335fa6e4e909e1d";
export const url=new URL("../icons/figma-logo-duotone.svg?v=30b49b27b95164fedf55a8de7f3d3f7e39c3f17efeae1dbab869f3e9fa42a654",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
