export const name="mouse_lock_off";
export const id="dl_84e70539c8c8898d2dc6";
export const url=new URL("../icons/mouse_lock_off.svg?v=935c6f366beda65a5f47772a0038d4ce2defccfd8730f77e230492cdd3fbcf5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
