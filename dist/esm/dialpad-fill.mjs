export const name="dialpad-fill";
export const id="dl_f93c0f6a15eebc4bcfc8";
export const url=new URL("../icons/dialpad-fill.svg?v=b96b67bac30aa2b543b56cee3d8a2f05fb58864818042309406ef5d26d95a003",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
