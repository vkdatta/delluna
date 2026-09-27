export const name="sync_desktop-fill";
export const id="dl_d2060aeabc52e67c38ca";
export const url=new URL("../icons/sync_desktop-fill.svg?v=e45879d79a3afb1c011124a72f47c8840e28f8fdda378360d14d6c0c49db768a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
