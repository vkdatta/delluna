export const name="keyboard_arrow_up-fill";
export const id="dl_f93f4c1dcf96e2ddcae0";
export const url=new URL("../icons/keyboard_arrow_up-fill.svg?v=56625b8653ccd12d74c0bf52d7d8786c09eebc9aed8fb0b66c355f9b3d8d9503",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
