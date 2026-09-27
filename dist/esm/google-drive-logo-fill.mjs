export const name="google-drive-logo-fill";
export const id="dl_0a2675be9b544adda7f0";
export const url=new URL("../icons/google-drive-logo-fill.svg?v=1da858cdbf2e3af19f1630b3b1d62ebd938260472b7c82872453b6005a72ce96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
