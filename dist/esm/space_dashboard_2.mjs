export const name="space_dashboard_2";
export const id="dl_00a3d0721bc81bb1551b";
export const url=new URL("../icons/space_dashboard_2.svg?v=de160db322274d8101f89ad301f16d19b7a72a9791bd79a60f9f4009ec913a34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
