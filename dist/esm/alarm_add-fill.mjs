export const name="alarm_add-fill";
export const id="dl_ac849ffba1f56cf09dd1";
export const url=new URL("../icons/alarm_add-fill.svg?v=0cdb0778211900e935b783a06af23d240620855f9f526f60d932cbd27f54f6d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
