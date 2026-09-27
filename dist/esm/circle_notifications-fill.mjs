export const name="circle_notifications-fill";
export const id="dl_3a4a94bffa1d4c3045e5";
export const url=new URL("../icons/circle_notifications-fill.svg?v=7aa60d8ededd41591398879d87530d9ac6df04e84ea6c9c8473d2d5ad75c3267",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
