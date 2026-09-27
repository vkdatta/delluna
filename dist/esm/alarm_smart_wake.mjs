export const name="alarm_smart_wake";
export const id="dl_9cea05cafe43c70e8c18";
export const url=new URL("../icons/alarm_smart_wake.svg?v=2c27cad2ea0123b3801b298449d68eb550d9816369f1ff3c43d8ee7abfb3c2d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
