export const name="mouse_lock-fill";
export const id="dl_bfac33ea4d3c6572e3bb";
export const url=new URL("../icons/mouse_lock-fill.svg?v=d2f8f960d9aeec26f5ed40e53160784c8e6b7f0395498ff29cd5aaef1433ae30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
