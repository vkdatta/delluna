export const name="folder-user-thin";
export const id="dl_732cd8bd3d9b4659a24d";
export const url=new URL("../icons/folder-user-thin.svg?v=4c7a3a153c32626d7768758d4f174964ddd03a7d97964c024cdcb8240f8ccb6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
