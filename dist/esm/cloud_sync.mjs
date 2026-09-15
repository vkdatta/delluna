export const name="cloud_sync";
export const id="dl_2c6b73b434ce4665b7ee";
export const url=new URL("../icons/C/cloud_sync.svg?v=2fde5b777eb8d599937799e556aca0a47097bdcced7a0aad5500d432042a19ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
