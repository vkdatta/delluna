export const name="deployed_code_update";
export const id="dl_11ee38ed9d5548968483";
export const url=new URL("../icons/deployed_code_update.svg?v=679fa38647e8355aa78289d6b71942abe40d85b01d0e04bfb6e9dae81ee6d765",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
