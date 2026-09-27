export const name="mountain_flag-fill";
export const id="dl_fd551255142c4620e7d7";
export const url=new URL("../icons/mountain_flag-fill.svg?v=755d2c2ec683e8c09b852686f8c2c16e90fa0268410b34cec3635a7eb4632e37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
