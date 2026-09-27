export const name="folder-simple-user-fill";
export const id="dl_c976d4f57e554f9e9b62";
export const url=new URL("../icons/folder-simple-user-fill.svg?v=073d4c46c0bbe62f58ab8c356fe95ecc822e3c73c3093c430a12f7be45feba16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
