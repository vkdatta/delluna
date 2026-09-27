export const name="lucid_1-calendar-off";
export const id="dl_81c9016b62f444b0904a";
export const url=new URL("../icons/lucid_1-calendar-off.svg?v=c82396cd74d24512550ebaf8ebcca721df05f3b13e44a599952114c23a0f653d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
