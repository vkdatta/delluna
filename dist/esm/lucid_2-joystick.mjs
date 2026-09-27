export const name="lucid_2-joystick";
export const id="dl_2e3a043c44bd4ae6b503";
export const url=new URL("../icons/lucid_2-joystick.svg?v=5a2808020e6ca503838edef51d7aa68d58df6d20d0864814599448b2a4589323",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
