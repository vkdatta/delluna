export const name="square-logo";
export const id="dl_98cb688608b949b5f0ae";
export const url=new URL("../icons/square-logo.svg?v=b6e022714130605dd4d8db7dec3d14c09ec17ec15bf10cb746d1dc6c8bcb0bac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
