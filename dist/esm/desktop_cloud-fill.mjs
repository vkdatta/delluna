export const name="desktop_cloud-fill";
export const id="dl_f501ab6163ac4814b994";
export const url=new URL("../icons/D/desktop_cloud-fill.svg?v=625cd0d89d77dcca298c55b2d24cf4cfe669c3277aa8deb215ad3d1427dcc2c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
