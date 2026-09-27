export const name="switch_access-fill";
export const id="dl_63458bfb9c3c52d46b0f";
export const url=new URL("../icons/switch_access-fill.svg?v=ac2dafc7ac54051ae3f7ecfcde6e42c6cecd96765bc1e5a4e99cc306005aaf8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
