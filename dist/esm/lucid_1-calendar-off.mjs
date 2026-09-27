export const name="lucid_1-calendar-off";
export const id="dl_81c9016b62f444b0904a";
export const url=new URL("../icons/lucid_1-calendar-off.svg?v=1e344af89e0d293ed76d3ea00a24297cdc4730696d05554029cf0d8be4dea63d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
