export const name="arrow-square-right-duotone";
export const id="dl_71ffcacd98ff442d9738";
export const url=new URL("../icons/arrow-square-right-duotone.svg?v=8e04ed46b10cf00fc1e57275d9fd4725403631bafb0708772987a05cc828d8c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
