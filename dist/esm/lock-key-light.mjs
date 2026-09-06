export const name="lock-key-light";
export const id="dl_c5c5f321af4a46a1bbb1";
export const url=new URL("../icons/lock-key-light.svg?v=f912b06960fdb752ba32a2b0caedef9d9dba9c56790dc664ee20a9622064e2db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
