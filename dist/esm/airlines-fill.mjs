export const name="airlines-fill";
export const id="dl_a4dce010c14b6ab02bd3";
export const url=new URL("../icons/airlines-fill.svg?v=fab5c520695f56464eeb64a696d4773462aaf332e25d5ef67b9cce781f39c7b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
