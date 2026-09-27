export const name="storm-fill";
export const id="dl_8741e3b462a4fd178a2a";
export const url=new URL("../icons/storm-fill.svg?v=1487e13e9fc41847f860f97d4ed48180b6ca12affda4379a0d0c16903441ad3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
