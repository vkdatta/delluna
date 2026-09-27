export const name="hive-fill";
export const id="dl_5324c5c94affda5a6dff";
export const url=new URL("../icons/hive-fill.svg?v=bf4df44a0cbdd479b73067601109c8db8ff7d182e27935bab2b2637bfde24e1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
