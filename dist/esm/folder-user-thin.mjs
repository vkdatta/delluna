export const name="folder-user-thin";
export const id="dl_732cd8bd3d9b4659a24d";
export const url=new URL("../icons/folder-user-thin.svg?v=0f982f0a8cfb6ac1a3a0dbf8338c77929372a3ca52cc9a97b979f80c202e2389",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
