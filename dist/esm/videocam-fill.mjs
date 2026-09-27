export const name="videocam-fill";
export const id="dl_53264a4389ef75f93c48";
export const url=new URL("../icons/videocam-fill.svg?v=0aeeb4a003efdd73e64da14be6d91b44501c82b242f6889160ce71eb960cb7e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
