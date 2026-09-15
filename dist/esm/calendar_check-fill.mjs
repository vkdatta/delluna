export const name="calendar_check-fill";
export const id="dl_30eb8cf8370d4239bb9a";
export const url=new URL("../icons/C/calendar_check-fill.svg?v=f411b324986d07b47e0f9f66d65b1c359a65a1d6efbfe23f676cd5beab977f26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
