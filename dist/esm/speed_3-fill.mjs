export const name="speed_3-fill";
export const id="dl_67f3cfe8fdbc28c19b9a";
export const url=new URL("../icons/speed_3-fill.svg?v=134583ed2001b7c2a3381e5e51ad97c88a63e0400ffd02cf9a5dd1f3661964a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
