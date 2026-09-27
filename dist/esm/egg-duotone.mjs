export const name="egg-duotone";
export const id="dl_11af2c1e214242aab1f3";
export const url=new URL("../icons/egg-duotone.svg?v=d1e2f09294ee33aab3caa6a4fcd27b1963f5fe91cc5534966b0e8d66fe0c9a26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
