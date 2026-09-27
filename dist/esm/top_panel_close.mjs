export const name="top_panel_close";
export const id="dl_f78fc84c84118a4a4f25";
export const url=new URL("../icons/top_panel_close.svg?v=b9875854a9b86ffac01494c0f3d751b45f0cefac2579d4516721b86d2e822181",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
