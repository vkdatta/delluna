export const name="wifi-high-bold";
export const id="dl_fdcbdfcb399b4d9f9d7c";
export const url=new URL("../icons/W/wifi-high-bold.svg?v=e6b66437e340630aa1604592a6065583da7a27d1fe118e1cd7a6be4ad42ac694",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
