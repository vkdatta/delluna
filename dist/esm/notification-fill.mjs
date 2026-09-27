export const name="notification-fill";
export const id="dl_4a0b7cc523c24e529a85";
export const url=new URL("../icons/notification-fill.svg?v=319731eefe2a5343361c04d31c9e4a3d1289bb5929ca69d036634698f224f5a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
