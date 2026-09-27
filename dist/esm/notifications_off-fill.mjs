export const name="notifications_off-fill";
export const id="dl_73e7c17dc40698690c35";
export const url=new URL("../icons/notifications_off-fill.svg?v=e29498d9c0a0e3e18af8008de9fb8ccc74d78b8b9e8a306270202e1dc169902b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
