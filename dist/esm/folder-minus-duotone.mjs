export const name="folder-minus-duotone";
export const id="dl_e6a2d9fa3bc348dda031";
export const url=new URL("../icons/folder-minus-duotone.svg?v=c3e0279f9116bd829451620316fefe8ecf0f16bbd41e5fe14556024ac7fa19f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
