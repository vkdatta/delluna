export const name="notification_settings-fill";
export const id="dl_086dabfb50ff404fa19a";
export const url=new URL("../icons/notification_settings-fill.svg?v=a8fb2deba41696b2a1904c2c1e3750a2da699a1fa6b872505de01a279b666eb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
