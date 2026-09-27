export const name="eye-closed";
export const id="dl_57a3434e217a4ef6b9ed";
export const url=new URL("../icons/eye-closed.svg?v=0c3000d016e85362d511bab7e43d55b563dc303b8084ffae3458176c01a3075e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
