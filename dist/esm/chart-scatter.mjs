export const name="chart-scatter";
export const id="dl_4756f0321a164df5b2f6";
export const url=new URL("../icons/chart-scatter.svg?v=29196166aabcc23677546ee78b2c92f061b3e936f78b835cce403d9d1df699d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
