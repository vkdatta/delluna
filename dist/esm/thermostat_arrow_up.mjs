export const name="thermostat_arrow_up";
export const id="dl_0f70af4a5a8848158d56";
export const url=new URL("../icons/thermostat_arrow_up.svg?v=ef1f003095f41c119452e9748d8ef985ecfe00d520ad57cdc9873cfbb6071648",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
