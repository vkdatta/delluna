export const name="nest_wifi_point";
export const id="dl_9ca1677b9e3dba2e060c";
export const url=new URL("../icons/nest_wifi_point.svg?v=fbe2ca099bb39a18230ef640aa1b551f9b451678293d704f75f8a47820cc403d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
