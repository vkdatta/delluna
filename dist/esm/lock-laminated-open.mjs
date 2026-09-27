export const name="lock-laminated-open";
export const id="dl_395f080b06bb497cadab";
export const url=new URL("../icons/lock-laminated-open.svg?v=e09fb6be5026e06f5f6bfb421759750fc59a01dd5ad4c77231ca0dd48c70b3dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
