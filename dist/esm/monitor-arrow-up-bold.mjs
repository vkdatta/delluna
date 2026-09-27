export const name="monitor-arrow-up-bold";
export const id="dl_69961bf6638b4c80bb5f";
export const url=new URL("../icons/monitor-arrow-up-bold.svg?v=3f706f95c9a9374d28159b7b49471a3fd7986d961e7a5de25a6087073fc25da2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
