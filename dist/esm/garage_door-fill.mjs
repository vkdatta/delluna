export const name="garage_door-fill";
export const id="dl_4c27123676d88a66d261";
export const url=new URL("../icons/garage_door-fill.svg?v=c9bdf9ca0c85c43a5b28e0a4c6830db9e85483c767a4668f186749509f5459d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
