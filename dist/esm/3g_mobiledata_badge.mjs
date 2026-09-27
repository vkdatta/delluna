export const name="3g_mobiledata_badge";
export const id="dl_0d1d444f41458fb1d382";
export const url=new URL("../icons/3g_mobiledata_badge.svg?v=239d6899915bcc618e3a8fe95e6de23d026722610fa9be0fb2c92a1e1b0ca48d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
