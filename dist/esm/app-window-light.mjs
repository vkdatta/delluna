export const name="app-window-light";
export const id="dl_3d4f3efc5ca04865ae58";
export const url=new URL("../icons/app-window-light.svg?v=3dbb0208f07df373e650d13f6f3fdab727d90eeb1b7457a8a67e55b4471da844",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
