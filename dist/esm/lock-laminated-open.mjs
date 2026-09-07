export const name="lock-laminated-open";
export const id="dl_395f080b06bb497cadab";
export const url=new URL("../icons/lock-laminated-open.svg?v=6bf2049471191e5ae3bc922ad3cf8fac32b93b8492cf65970abad2bfbcf9f95e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
