export const name="cloud_sync-fill";
export const id="dl_ff0efdb1f8503c6dace8";
export const url=new URL("../icons/cloud_sync-fill.svg?v=c435b23d12b164721a44045facef3ae9d9d124328192d8c650c346d79bf23bac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
