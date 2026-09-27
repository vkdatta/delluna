export const name="notification_settings-fill";
export const id="dl_388fe2627042cdcad73a";
export const url=new URL("../icons/notification_settings-fill.svg?v=7c8f0edd94438e817f6da27bf9c61ff2d7c53efc8e9e83fcd0ddacdc0df06c4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
