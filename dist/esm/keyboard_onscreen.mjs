export const name="keyboard_onscreen";
export const id="dl_f115c09ba7094349ad4e";
export const url=new URL("../icons/keyboard_onscreen.svg?v=d9dba7ce7363efdad32442678525b0fe4c00ad0557a8ca9e28a46e121f133173",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
