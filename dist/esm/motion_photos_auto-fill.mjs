export const name="motion_photos_auto-fill";
export const id="dl_292008d8d61258cdb91a";
export const url=new URL("../icons/motion_photos_auto-fill.svg?v=59d767540521de4814f852994d720985f9e9bf5e3c256518880699a5e4e923f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
