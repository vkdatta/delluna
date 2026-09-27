export const name="cloud_download";
export const id="dl_75455ec2e5da88e91ead";
export const url=new URL("../icons/cloud_download.svg?v=0a349a9ed40961f68ad33a9cd2bf70ba32a35f9a7d8b9c925e779bd3a2070477",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
