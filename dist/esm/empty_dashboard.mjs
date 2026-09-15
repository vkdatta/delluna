export const name="empty_dashboard";
export const id="dl_803755ae8dde4fd49192";
export const url=new URL("../icons/E/empty_dashboard.svg?v=8b4e2f9e0e154f05daae4a676a133b69b140ab089842ac7993d4e31e9221549c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
