export const name="cloud_alert";
export const id="dl_c9404e65922edecc57a8";
export const url=new URL("../icons/cloud_alert.svg?v=71774798c9ec97ba090d5fa94f870691b3273f0ecae66aacd98c9707122857eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
