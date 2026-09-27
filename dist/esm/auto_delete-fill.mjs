export const name="auto_delete-fill";
export const id="dl_fba07e9aa8cd06a5dffc";
export const url=new URL("../icons/auto_delete-fill.svg?v=9362dc25af972445417c1bd2b59e6cd60266dc3b16171961d1dba132a8692163",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
