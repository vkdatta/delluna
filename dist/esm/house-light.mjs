export const name="house-light";
export const id="dl_161ec25e24bc4ff09914";
export const url=new URL("../icons/house-light.svg?v=d40a2a3891e3cfa9c272d0883924605822054b3168b423e3dc520b086c13427c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
