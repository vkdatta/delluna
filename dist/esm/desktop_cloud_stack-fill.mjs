export const name="desktop_cloud_stack-fill";
export const id="dl_8e242920a963088d76a0";
export const url=new URL("../icons/desktop_cloud_stack-fill.svg?v=d9385dbac5c2a8d83aca54b90b56472a8001b94c2d54b2f9eb57e4940b43034f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
