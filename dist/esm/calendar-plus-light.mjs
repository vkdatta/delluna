export const name="calendar-plus-light";
export const id="dl_3d5a4e7f02fc4c03acdd";
export const url=new URL("../icons/calendar-plus-light.svg?v=f6c088c94478aa4f0da2664121836ac4b6581357614a38a3d4b93eec94a61945",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
