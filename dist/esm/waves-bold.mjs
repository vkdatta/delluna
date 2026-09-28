export const name="waves-bold";
export const id="dl_e1c95e01c1f754c2db1f";
export const url=new URL("../icons/waves-bold.svg?v=9de0925882071444dc6c2606da14fc1c6eda8a766a5c7dadf929c9d7530fa17c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
