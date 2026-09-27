export const name="sync_desktop-fill";
export const id="dl_4d2f22ebfe2ce55e1ada";
export const url=new URL("../icons/sync_desktop-fill.svg?v=7f6a5d36a962401c03d6f9851053cc6aa8ad36a78e35d0a0676000142fd70d50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
