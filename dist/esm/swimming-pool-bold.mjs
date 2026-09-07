export const name="swimming-pool-bold";
export const id="dl_e12b278656dd48a99942";
export const url=new URL("../icons/S/swimming-pool-bold.svg?v=14f8cecfc27effa9ff235897e498a6bef6fac1eb77bb5336fd2d17a2742bf2fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
