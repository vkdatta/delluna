export const name="tray-arrow-down-fill";
export const id="dl_7457759d93ce4c5da4b1";
export const url=new URL("../icons/T/tray-arrow-down-fill.svg?v=c0fefe7cee2e045b5d11de5c97b751598785274d455a0f34ac987e9ec8468e10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
